import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:ludonew/controller/send_otp_controller.dart';
import 'package:ludonew/controller/verify_otp_controller.dart';
import 'package:ludonew/routes/routes.dart';
import 'package:ludonew/util/constant/contant_color.dart';
import 'package:ludonew/util/constant/images_path.dart';
import 'package:ludonew/widgets/CustomSnackbar.dart';
import 'package:ludonew/widgets/font.dart';
import 'package:otp_text_field/otp_field.dart';
import 'package:otp_text_field/otp_field_style.dart';
import 'package:otp_text_field/style.dart';

class Otp extends StatefulWidget {
  const Otp({super.key});

  @override
  State<Otp> createState() => _Otp();
}

class _Otp extends State<Otp> {
  bool check = false;
  String otp = '';
  String phoneno = "";
  OtpFieldController otpbox = OtpFieldController();
  final SendOtpController sendOtpController = Get.put(SendOtpController());
  final Map<String, dynamic> arguments = Get.arguments;
  final VerifyOtpController verifyOtpController =
      Get.put(VerifyOtpController());

  @override
  void initState() {
    super.initState();
    phoneno = arguments['phoneno'];
    sendOtpController.sendOtp(context, phoneno);
  }

  @override
  Widget build(BuildContext context) {
    final double screenWidth = MediaQuery.of(context).size.width;
    final double screenHeight = MediaQuery.of(context).size.height;

    return Scaffold(
      backgroundColor: AppColors.white,
      body: SafeArea(
        child: Obx(() {
          return Stack(children: [
            Padding(
              padding: EdgeInsets.all(16),
              child: Column(
                children: [
                  Row(
                    children: [
                      GestureDetector(
                          onTap: () {
                            Get.offAndToNamed(Routes.mobile);
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
                    "Enter OTP",
                    style: FontConstant.styleSemiBold(
                        fontSize: 25, color: AppColors.black),
                  ),
                  SizedBox(
                    height: 5,
                  ),
                  Text(
                    "Enter OTP sent to $phoneno",
                    style: FontConstant.styleMedium(
                        fontSize: 18, color: AppColors.black),
                  ),
                  SizedBox(
                    height: screenHeight * 0.05,
                  ),
                  Padding(
                    padding:
                        const EdgeInsets.only(bottom: 10, left: 15, right: 15),
                    child: OTPTextField(
                      otpFieldStyle: OtpFieldStyle(
                          focusBorderColor: AppColors.secondaryColor,
                          // enabledBorderColor: AppColors.primaryColor,
                          backgroundColor: AppColors.white),
                      outlineBorderRadius: 5,
                      controller: otpbox,
                      length: 6,
                      width: MediaQuery.of(context).size.width,
                      fieldWidth: 40,
                      keyboardType: TextInputType.number,
                      style: TextStyle(fontSize: 17),
                      textFieldAlignment: MainAxisAlignment.spaceAround,
                      fieldStyle: FieldStyle.box,
                      onCompleted: (pin) {
                        otp = pin;
                        print("Completed: $otp");
                      },
                    ),
                  ),
                  SizedBox(
                    height: screenHeight * 0.02,
                  ),
                  sendOtpController.isButtonEnabled.value
                      ? InkWell(
                          onTap: () {
                            sendOtpController.sendOtp(context, phoneno);
                          },
                          child: Text(
                            "Send Again",
                            style: FontConstant.styleSemiBold(
                              fontSize: 15,
                              color: AppColors.primaryColor,
                            ),
                          ),
                        )
                      : Text(
                          "Resend in 00:${sendOtpController.remainingSeconds.value.toString().padLeft(2, '0')} sec",
                          style: FontConstant.styleRegular(
                            fontSize: 15,
                            color: Colors.grey.shade600,
                          ),
                        ),
                  Spacer(),
                  SizedBox(
                    width: double.infinity,
                    child: ElevatedButton(
                        onPressed: () {
                          if (otp.length == 6) {
                            verifyOtpController.verifyOtp(
                                context, phoneno, otp);
                          } else {
                            CustomSanckbar.showSnackbar(context,
                                "Please enter a valid 6-digit OTP", false);
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
                          "Continue",
                          style: FontConstant.styleMedium(
                              fontSize: 17, color: AppColors.white),
                        )),
                  ),
                  SizedBox(
                    height: screenHeight * 0.05,
                  ),
                ],
              ),
            ),
            if (verifyOtpController.isLoading.value ||
                sendOtpController.isLoading.value)
              Center(
                child: CircularProgressIndicator(
                  color: AppColors.primaryColor,
                ),
              )
          ]);
        }),
      ),
    );
  }
}
