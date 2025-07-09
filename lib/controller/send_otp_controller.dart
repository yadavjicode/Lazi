import 'dart:async';

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

  final RxBool isButtonEnabled = false.obs;
  final RxInt remainingSeconds = 0.obs;
  Timer? _timer;

  Future<void> sendOtp(BuildContext context, String phoneno) async {
    isLoading.value = true;
    _error = null;

    try {
      _member = await apiService.sendOtp("${phoneno}");
      startResendTimer();
      CustomSanckbar.showSnackbar(context, member?.message ?? "", true);

      if (member?.message != null) {
        if (member?.message == "OTP sent Successfully") {
          // Get.offAndToNamed(Routes.otp, arguments: {"phoneno": phoneno});
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

  void startResendTimer({int seconds = 50}) {
    print("🔄 Timer started for $seconds seconds."); // Debugging
    isButtonEnabled.value = false;
    remainingSeconds.value = seconds;

    _timer?.cancel();
    _timer = Timer.periodic(Duration(seconds: 1), (timer) {
      remainingSeconds.value--;
      print(
          "⏱️ Seconds left: ${remainingSeconds.value}"); // Debuggint each tick
      if (remainingSeconds.value <= 0) {
        isButtonEnabled.value = true;
        _timer?.cancel();
        print("✅ Timer completed, button enabled.");
      }
    });
  }

  @override
  void onClose() {
    _timer?.cancel();
    super.dispose();
  }
}
