import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:ludonew/api_service/api_service.dart';
import 'package:ludonew/model/daily_win_model.dart';
import 'package:ludonew/widgets/CustomSnackbar.dart';

class DailyWinController extends GetxController {
  final ApiService apiService = ApiService();
  var isLoading = false.obs;
  DailyWinModel? _member;
  String? _error;
  DailyWinModel? get member => _member;
  String? get error => _error;
  List<Daily> dailyList = [];

  Future<void> dailyWin(BuildContext context) async {
    isLoading.value = true;
    _error = null;

    try {
      _member = await apiService.dailyWin();
      if (member?.status ?? false) {
        dailyList = member?.dailyList ?? [];
      }
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
