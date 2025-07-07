import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:ludonew/api_service/api_service.dart';
import 'package:ludonew/model/check_balance_model.dart';
import 'package:ludonew/offline_ludo/offline_main%20_screen.dart';
import 'package:ludonew/online_ludo/online_daily/online_daily.dart';
import 'package:ludonew/online_ludo/online_weekly/online_weekly.dart';
import 'package:ludonew/routes/routes.dart';
import 'package:ludonew/widgets/CustomSnackbar.dart';

class CheckBalanceController extends GetxController {
  final ApiService apiService = ApiService();
  var isLoading = false.obs;
  CheckBalanceModel? _member;
  String? _error;
  CheckBalanceModel? get member => _member;
  String? get error => _error;

  Future<void> checkBalance(
      BuildContext context,
      String tournamentId,
      String noOfPlayer,
      String tournmentTime,
      String type,
      String checkType) async {
    isLoading.value = true;
    _error = null;

    try {
      _member = await apiService.checkBalance(tournamentId, checkType);

      if ((_member?.status ?? false)) {
        CustomSanckbar.showSnackbar(context, _member?.message ?? "", true);
        if (type == "offline") {
          Get.to(FirstScreen(
            tournmentId: tournamentId,
            noOfPlayer: noOfPlayer,
            tournmentTime: tournmentTime,
          ));
        } else if (type == "daily") {
          Get.to(OnlineDaily(
            tournmentId: tournamentId,
            noOfPlayer: noOfPlayer,
            tournmentTime: tournmentTime,
          ));
        } else if (type == "weekly") {
          Get.to(OnlineWeekly(
            tournmentId: tournamentId,
            noOfPlayer: noOfPlayer,
            tournmentTime: tournmentTime,
          ));
        }
      } else {
        CustomSanckbar.showSnackbar(context, _member?.message ?? "", false);
        Get.toNamed(Routes.myBalance);
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
