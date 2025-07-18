import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:ludonew/api_service/api_service.dart';
import 'package:ludonew/model/daily_game_list_model.dart';
import 'package:ludonew/widgets/CustomSnackbar.dart';

class DailyGameListController extends GetxController {
  final ApiService apiService = ApiService();
  var isLoading = false.obs;
  DailyGameListModel? _member;
  String? _error;
  DailyGameListModel? get member => _member;
  String? get error => _error;

  Future<void> dailyGameList(
      BuildContext context,
      String tournamentId,
      String noOfPlayer,
      String tournmentTime,
      String type,
      String checkType,
      String userId,
      String name) async {
    isLoading.value = true;
    _error = null;

    try {
      _member = await apiService.dailyGameList(tournamentId);
    } catch (e) {
      _error = e.toString();
      print(_error);
      CustomSanckbar.showSnackbar(
          context,
          "Something went wrong while fetching data. Please try again later!",
          false);
    } finally {
      isLoading.value = false;
    }
  }
}
