import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:ludonew/api_service/api_service.dart';
import 'package:ludonew/model/profile_modal.dart';
import 'package:ludonew/widgets/CustomSnackbar.dart';

class ProfileController extends GetxController {
  final ApiService apiService = ApiService();
  var isLoading = false.obs;
  ProfileModel? _member;
  String? _error;
  ProfileModel? get member => _member;
  String? get error => _error;

  Future<void> profile(BuildContext context) async {
    isLoading.value = true;
    _error = null;

    try {
      _member = await apiService.profile();
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
