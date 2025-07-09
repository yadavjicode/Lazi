import 'dart:io';

import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:ludonew/api_service/api_service.dart';
import 'package:ludonew/controller/profile_controller.dart';
import 'package:ludonew/model/edit_profile_model.dart';
import 'package:ludonew/widgets/CustomSnackbar.dart';

class EditProfileController extends GetxController {
  final ApiService apiService = ApiService();
  var isLoading = false.obs;
  EditProfileModel? _member;
  String? _error;
  EditProfileModel? get member => _member;
  String? get error => _error;
  final ProfileController profileController = Get.put(ProfileController());

  Future<void> editProfile(BuildContext context, String name, String dob,
      String gender, File? profileImage) async {
    isLoading.value = true;
    _error = null;

    try {
      _member = await apiService.editProfile(name, dob, gender, profileImage);
      CustomSanckbar.showSnackbar(context, _member?.message ?? "", true);
      profileController.profile(context);
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
