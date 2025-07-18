import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:ludonew/api_service/api_service.dart';
import 'package:ludonew/model/weekly_game_list_model.dart';
import 'package:ludonew/widgets/CustomSnackbar.dart';

class WeeklyGameListController extends GetxController {
  final ApiService apiService = ApiService();
  var isLoading = false.obs;
  WeeklyGameListModel? _member;
  String? _error;
  WeeklyGameListModel? get member => _member;
  String? get error => _error;

  Future<void> weeklyGameList(
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
      _member = await apiService.weeklyGameList(tournamentId);
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
