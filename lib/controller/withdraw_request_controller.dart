import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:ludonew/api_service/api_service.dart';
import 'package:ludonew/controller/get_kyc_controller.dart';
import 'package:ludonew/controller/profile_controller.dart';
import 'package:ludonew/model/withdraw_request_model.dart';
import 'package:ludonew/routes/routes.dart';
import 'package:ludonew/widgets/CustomSnackbar.dart';

class WithdrawRequestController extends GetxController {
  final ApiService apiService = ApiService();
  var isLoading = false.obs;
  WithdrawRequestModel? _member;
  String? _error;
  WithdrawRequestModel? get member => _member;
  String? get error => _error;
  final GetKycController getKycController = Get.put(GetKycController());
  final ProfileController profileController = Get.put(ProfileController());

  Future<void> withdrawRequest(BuildContext context, String amount) async {
    isLoading.value = true;
    _error = null;
    try {
      getKycController.getKYC(context).then((_) async {
        if ((getKycController.member?.data?.status ?? "") == "Approved") {
          _member = await apiService.withdrawRequest(amount);
          profileController.profile(context);
          CustomSanckbar.showSnackbar(context, _member?.message ?? "", true);
          Get.back();
        } else {
          Get.toNamed(Routes.kycForm);
        }
      });
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
