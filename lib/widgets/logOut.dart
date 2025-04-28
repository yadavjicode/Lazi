import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:ludonew/routes/routes.dart';
import 'package:ludonew/util/constant/contant_color.dart';
import 'package:ludonew/widgets/font.dart';
import 'package:shared_preferences/shared_preferences.dart';

class LogoutConfirmationDialog extends StatelessWidget {
  const LogoutConfirmationDialog({super.key});

  Future<void> logout() async {
    final prefs = await SharedPreferences.getInstance();
    await prefs.setString('token', "").then((_) {
      Get.offAllNamed(Routes.mobile);
    });
  }

  @override
  Widget build(BuildContext context) {
    return AlertDialog(
      title: Text('Logout Confirmation',
          style:
              FontConstant.styleSemiBold(fontSize: 17, color: AppColors.black)),
      backgroundColor: AppColors.white,
      content: Text('Are you sure you want to log out?',
          style:
              FontConstant.styleRegular(fontSize: 13, color: AppColors.black)),
      actions: <Widget>[
        TextButton(
          child: Text(
            'Cancel',
            style: FontConstant.styleSemiBold(
                fontSize: 15, color: AppColors.black),
          ),
          onPressed: () {
            Get.back(); // Closes the dialog
          },
        ),
        TextButton(
          child: Text(
            'Logout',
            style: FontConstant.styleSemiBold(
                fontSize: 15, color: AppColors.black),
          ),
          onPressed: () {
            // Perform logout operation here
            logout(); // Restart the app
          },
        ),
      ],
    );
  }
}

void showLogoutConfirmationDialog(BuildContext context) {
  showDialog(
    context: context,
    builder: (BuildContext context) {
      return const LogoutConfirmationDialog();
    },
  );
}
