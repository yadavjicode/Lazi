import 'package:flutter/material.dart';
import 'package:ludonew/util/constant/contant_color.dart';
import 'package:ludonew/widgets/font.dart';

class DialogConstant {
  static Future<bool> showExitConfirmationDialog(BuildContext context) async {
    return await showDialog(
          context: context,
          builder: (context) => AlertDialog(
            title: Text('Exit App',
                style: FontConstant.styleSemiBold(
                    fontSize: 17, color: AppColors.black)),
            backgroundColor: Colors.grey.shade200,
            content: Text('Do you want to exit the app?',
                style: FontConstant.styleRegular(
                    fontSize: 15, color: AppColors.black)),
            actions: [
              TextButton(
                onPressed: () => Navigator.of(context).pop(false), // Cancel
                child: Text(
                  'Cancel',
                  style: FontConstant.styleSemiBold(
                      fontSize: 15, color: AppColors.black),
                ),
              ),
              TextButton(
                onPressed: () => {
                  Navigator.of(context).pop(true),
                }, // Exit
                child: Text(
                  'Exit',
                  style: FontConstant.styleSemiBold(
                      fontSize: 15, color: AppColors.black),
                ),
              ),
            ],
          ),
        ) ??
        false;
  }
}
