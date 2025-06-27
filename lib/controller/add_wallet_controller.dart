import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:ludonew/api_service/api_service.dart';
import 'package:ludonew/controller/profile_controller.dart';
import 'package:ludonew/model/add_wallet_model.dart';
import 'package:ludonew/widgets/CustomSnackbar.dart';

class AddWalletController extends GetxController {
  final ApiService apiService = ApiService();
  var isLoading = false.obs;
  AddWalletModel? _member;
  String? _error;
  AddWalletModel? get member => _member;
  String? get error => _error;
  final ProfileController profileController = Get.put(ProfileController());

  Future<void> addWallet(BuildContext context, String amount) async {
    isLoading.value = true;
    _error = null;

    try {
      _member = await apiService.addWallet(amount);

      if ((_member?.status ?? false)) {
        CustomSanckbar.showSnackbar(context, _member?.message ?? "", true);
        profileController.profile(context);
        Get.back();
      } else {
        CustomSanckbar.showSnackbar(context, _member?.message ?? "", false);
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
