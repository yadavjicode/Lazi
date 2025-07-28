import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:ludonew/api_service/api_service.dart';
import 'package:ludonew/model/get_kyc_model.dart';
import 'package:ludonew/widgets/CustomSnackbar.dart';

class GetKycController extends GetxController {
  final ApiService apiService = ApiService();
  var isLoading = false.obs;
  GetKYCModel? _member;
  String? _error;
  GetKYCModel? get member => _member;
  String? get error => _error;

  Future<void> getKYC(BuildContext context) async {
    isLoading.value = true;
    _error = null;
    try {
      _member = await apiService.getKYC();
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
