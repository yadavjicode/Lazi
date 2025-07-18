import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:ludonew/api_service/api_service.dart';
import 'package:ludonew/model/weekly_win_model.dart';
import 'package:ludonew/widgets/CustomSnackbar.dart';

class WeeklyWinController extends GetxController {
  final ApiService apiService = ApiService();
  var isLoading = false.obs;
  WeeklyWinModel? _member;
  String? _error;
  WeeklyWinModel? get member => _member;
  String? get error => _error;
  List<Weekly> weeklyList = [];

  Future<void> weeklyWin(BuildContext context) async {
    isLoading.value = true;
    _error = null;

    try {
      _member = await apiService.weeklyWin();
      if(_member?.status??false){
   weeklyList = member?.weeklyList ?? [];
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
