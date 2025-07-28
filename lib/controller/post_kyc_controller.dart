import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:ludonew/api_service/api_service.dart';
import 'package:ludonew/model/kyc_post_model.dart';
import 'package:ludonew/widgets/CustomSnackbar.dart';

class PostKycController extends GetxController {
  final ApiService apiService = ApiService();
  var isLoading = false.obs;
  KYCPostModel? _member;
  String? _error;
  KYCPostModel? get member => _member;
  String? get error => _error;

  Future<void> postKYC(BuildContext context, String bankName, String accountNO,
      String ifscCode, String branchName, String holderName) async {
    isLoading.value = true;
    _error = null;

    try {
      _member = await apiService.postKYC(
          bankName, accountNO, ifscCode, branchName, holderName);
      CustomSanckbar.showSnackbar(context, _member?.data ?? "", true);
      Get.back();
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
