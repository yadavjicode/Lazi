import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:ludonew/routes/routes.dart';
import 'package:ludonew/util/constant/contant_color.dart';
import 'package:ludonew/util/constant/images_path.dart';
import 'package:ludonew/widgets/font.dart';

class Language extends StatefulWidget {
  const Language({super.key});

  @override
  State<Language> createState() => _LanguageState();
}

class _LanguageState extends State<Language> {
  String? languageType;

  @override
  Widget build(BuildContext context) {
    final double screenWidth = MediaQuery.of(context).size.width;
    final double screenHeight = MediaQuery.of(context).size.height;
    return Scaffold(
      backgroundColor: AppColors.white,
      body: SafeArea(
          child: Stack(children: [
        Positioned.fill(
          child: Image.asset(
            ImagePath.lanBackground,
            fit: BoxFit.fill,
          ),
        ),
        Padding(
          padding: const EdgeInsets.all(16.0),
          child: SizedBox(
            width: screenWidth * 1,
            height: screenHeight * 1,
            child: Column(
              children: [
                SizedBox(
                  height: screenHeight * 0.07,
                ),
                Image.asset(ImagePath.logo, width: screenWidth * 0.4),
                SizedBox(
                  height: screenHeight * 0.07,
                ),
                Text(
                  "Welcome",
                  style: FontConstant.styleMedium(
                      fontSize: 20, color: AppColors.black),
                ),
                SizedBox(
                  height: screenHeight * 0.01,
                ),
                Text(
                  "Choose Language",
                  style: FontConstant.styleSemiBold(
                      fontSize: 25, color: AppColors.black),
                ),
                SizedBox(
                  height: screenHeight * 0.02,
                ),
                Text(
                  "भाषा चुनें",
                  style: FontConstant.styleMedium(
                      fontSize: 22, color: AppColors.black),
                ),
                SizedBox(
                  height: screenHeight * 0.04,
                ),
                Row(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    Expanded(
                      child: _buildUserTypeCard(
                          "English\n", "Aa", "createAccountAgent"),
                    ),
                    const SizedBox(width: 20),
                    Expanded(
                      child: _buildUserTypeCard(
                          "हिंदी (Hindi)", "अ", "createAccountIndividual"),
                    ),
                  ],
                ),
                SizedBox(
                  height: screenHeight * 0.02,
                ),
                Text(
                  "You can change later from account selection",
                  style: FontConstant.styleRegular(
                      fontSize: 15, color: AppColors.black),
                ),
              ],
            ),
          ),
        ),
      ])),
    );
  }

  Widget _buildUserTypeCard(String type, String short, String go) {
    bool isSelected = languageType == type;
    return GestureDetector(
      onTap: () {
        setState(() {
          languageType = type;
        });
        Get.offAllNamed(Routes.mobile);
      },
      child: Stack(children: [
        Card(
          color: isSelected
              ? const Color.fromARGB(255, 246, 234, 233)
              : Colors.white, // Change color on tap
          shape: RoundedRectangleBorder(
            borderRadius: BorderRadius.circular(15),
            side: BorderSide(
              color: Colors.red, // 👈 Your border color here
              width: 2.0, // 👈 Border thickness
            ),
          ),

          elevation: 3,
          child: Padding(
            padding: EdgeInsets.symmetric(vertical: 15, horizontal: 15),
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                Row(
                  children: [
                    Expanded(
                        child: Text(
                      type,
                      style: FontConstant.styleMedium(
                          fontSize: 18, color: AppColors.primaryColor),
                    )),
                    SizedBox(
                      width: 5,
                    ),
                    Container(
                        padding: EdgeInsets.all(5),
                        decoration: BoxDecoration(
                            color: AppColors.primaryColor,
                            shape: BoxShape.circle),
                        child: Icon(
                          Icons.arrow_forward,
                          color: AppColors.white,
                        ))
                  ],
                ),
                const SizedBox(height: 10),
                Align(
                  alignment: Alignment.centerRight,
                  child: Text(short,
                      style: FontConstant.styleRegular(
                          fontSize: 50, color: Colors.red.shade200)),
                ),
              ],
            ),
          ),
        ),
      ]),
    );
  }
}
