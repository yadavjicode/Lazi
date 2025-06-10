import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:ludonew/api_service/api_service.dart';
import 'package:ludonew/model/send_otp_model.dart';
import 'package:ludonew/widgets/CustomSnackbar.dart';

import '../routes/routes.dart';

class SendOtpController extends GetxController {
  final ApiService apiService = ApiService();
  var isLoading = false.obs;
  SendOtpModel? _member;
  String? _error;

  SendOtpModel? get member => _member;
  String? get error => _error;

  Future<void> sendOtp(BuildContext context, String phoneno) async {
    isLoading.value = true;
    _error = null;

    try {
      _member = await apiService.sendOtp("${phoneno}");
      CustomSanckbar.showSnackbar(context, member?.message ?? "", true);

      if (member?.message != null) {
        if (member?.message == "OTP sent Successfully") {
          Get.offAndToNamed(Routes.otp, arguments: {"phoneno": phoneno});
        } else {
          CustomSanckbar.showSnackbar(
              context,
              "Something went wrong while fetching data. Please try again later!",
              false);
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
