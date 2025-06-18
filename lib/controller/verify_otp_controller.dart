import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:ludonew/api_service/api_service.dart';
import 'package:ludonew/model/verify_otp_model.dart';
import 'package:ludonew/routes/routes.dart';
import 'package:ludonew/widgets/CustomSnackbar.dart';
import 'package:shared_preferences/shared_preferences.dart';

class VerifyOtpController extends GetxController {
  final ApiService apiService = ApiService();
  var isLoading = false.obs;
  VerifyOtpModel? _member;
  String? _error;
  VerifyOtpModel? get member => _member;
  String? get error => _error;

  Future<void> verifyOtp(
      BuildContext context, String phoneno, String otp) async {
    isLoading.value = true;
    _error = null;

    try {
      _member = await apiService.verifyOtp("${phoneno}", otp);
      CustomSanckbar.showSnackbar(context, member?.message ?? "", true);
      if ((member?.message ?? "") == "Success") {
        final prefs = await SharedPreferences.getInstance();
        final token = _member?.token;
        if (token != null) {
          await prefs.setString('token', token);
          Get.offAndToNamed(Routes.dasboard);
        } else {
          throw Exception('Invalid OTP');
        }
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
