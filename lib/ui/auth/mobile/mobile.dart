import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:ludonew/routes/routes.dart';
import 'package:ludonew/util/comman_code/validation.dart';
import 'package:ludonew/util/constant/contant_color.dart';
import 'package:ludonew/util/constant/images_path.dart';
import 'package:ludonew/widgets/CustomSnackbar.dart';
import 'package:ludonew/widgets/CustomTextFeild.dart';
import 'package:ludonew/widgets/font.dart';

class Mobile extends StatefulWidget {
  const Mobile({super.key});

  @override
  State<Mobile> createState() => _MobileState();
}

class _MobileState extends State<Mobile> {
  bool check = false;

  final TextEditingController phoneno = TextEditingController();
  final GlobalKey<FormState> formKey = GlobalKey<FormState>();

  @override
  void initState() {
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    final double screenWidth = MediaQuery.of(context).size.width;
    final double screenHeight = MediaQuery.of(context).size.height;
    return Scaffold(
      backgroundColor: AppColors.white,
      body: SafeArea(
        child: SingleChildScrollView(
          child: Padding(
            padding: EdgeInsets.all(16),
            child: Form(
              key: formKey,
              child: Column(
                children: [
                  Row(
                    children: [
                      GestureDetector(
                          onTap: () {
                            Get.offAndToNamed(Routes.language);
                          },
                          child: Icon(
                            Icons.arrow_back,
                            size: 30,
                            color: AppColors.primaryColor,
                          )),
                      SizedBox(width: 20),
                      Image.asset(
                        ImagePath.logo,
                        width: screenWidth * 0.35,
                      )
                    ],
                  ),
                  SizedBox(
                    height: screenHeight * 0.1,
                  ),
                  Text(
                    "Sign Up",
                    style: FontConstant.styleSemiBold(
                        fontSize: 25, color: AppColors.black),
                  ),
                  SizedBox(
                    height: 5,
                  ),
                  Row(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      Text(
                        "Existing User?",
                        style: FontConstant.styleMedium(
                            fontSize: 18, color: AppColors.black),
                      ),
                      Text(
                        " SIGN IN HERE",
                        style: FontConstant.styleMedium(
                            fontSize: 18, color: AppColors.secondaryColor),
                      ),
                    ],
                  ),
                  SizedBox(
                    height: screenHeight * 0.05,
                  ),
                  CustomTextField(
                    borderRadius: 10,
                    keyboardType: TextInputType.number,
                    maxlength: 10,
                    controller: phoneno,
                    hintText: "Enter Mobile no",
                    validator: (value) {
                      return Validation.validatePhoneno(value);
                    },
                    borderColor: AppColors.primaryColor,
                  ),
                  SizedBox(
                    height: screenHeight * 0.05,
                  ),
                  SizedBox(
                    width: double.infinity,
                    child: ElevatedButton(
                        onPressed: () {
                          if (formKey.currentState!.validate()) {
                            if (check) {
                              Get.offAndToNamed(Routes.otp, arguments: {
                                "phoneno": phoneno.text.toString().trim()
                              });
                            } else {
                              CustomSanckbar.showSnackbar(
                                  context,
                                  "Please agree to terms before continuing",
                                  false);
                            }
                          }
                        },
                        style: ElevatedButton.styleFrom(
                          backgroundColor:
                              AppColors.primaryColor, // ← your color
                          foregroundColor: Colors.white, // ← text/icon color
                          elevation: 4, // ← optional
                          padding: EdgeInsets.all(13),
                          shape: RoundedRectangleBorder(
                            // ← optional
                            borderRadius: BorderRadius.circular(23),
                          ),
                        ),
                        child: Text(
                          "Get OTP & Continue",
                          style: FontConstant.styleMedium(
                              fontSize: 17, color: AppColors.white),
                        )),
                  ),
                  Divider(),
                  Row(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Checkbox(
                        activeColor: AppColors.primaryColor,
                        value: check,
                        onChanged: (value) {
                          setState(() {
                            check = value!;
                          });
                        },
                      ),
                      Expanded(
                          child: Column(
                        children: [
                          Text(
                            "By continuing, I hereby confirm that I am 18 years of age or above and I am not playing from Assam, Telangana, Nagaland, Andhra Pradesh, Sikkim or outside India and I agree to the",
                            textAlign: TextAlign.justify,
                            style: FontConstant.styleRegular(
                                fontSize: 13, color: AppColors.darkgrey),
                          ),
                          Row(
                            children: [
                              Text(
                                "Terms and conditions",
                                style: FontConstant.styleRegular(
                                    fontSize: 13, color: AppColors.black),
                              ),
                              Text(
                                " and ",
                                style: FontConstant.styleRegular(
                                    fontSize: 13, color: AppColors.darkgrey),
                              ),
                              Text(
                                "Privacy Policy.",
                                style: FontConstant.styleRegular(
                                    fontSize: 13, color: AppColors.black),
                              )
                            ],
                          )
                        ],
                      ))
                    ],
                  ),
                ],
              ),
            ),
          ),
        ),
      ),
    );
  }
}
