import 'package:flutter/material.dart';
import 'package:flutter_svg/svg.dart';
import 'package:get/get.dart';
import 'package:ludonew/routes/routes.dart';
import 'package:ludonew/util/constant/contant_color.dart';
import 'package:ludonew/util/constant/icons_path.dart';
import 'package:ludonew/util/constant/images_path.dart';
import 'package:ludonew/widgets/font.dart';

class Home extends StatefulWidget {
  const Home({super.key});

  @override
  State<Home> createState() => _HomeState();
}

class _HomeState extends State<Home> {
  @override
  Widget build(BuildContext context) {
    final double screenWidth = MediaQuery.of(context).size.width;
    final double screenHeight = MediaQuery.of(context).size.height;
    return Scaffold(
      backgroundColor: AppColors.white,
      body: SafeArea(
        child: SingleChildScrollView(
          child: Column(
            children: [
              Padding(
                padding: const EdgeInsets.all(16.0),
                child: Row(
                  children: [
                    Image.asset(
                      ImagePath.logo,
                      width: screenWidth * 0.35,
                    ),
                    Spacer(),
                    Icon(
                      Icons.notifications_none,
                      color: AppColors.secondaryColor,
                      size: 35,
                    ),
                    SizedBox(
                      width: 10,
                    ),
                    Container(
                      padding:
                          EdgeInsets.symmetric(horizontal: 12, vertical: 5),
                      decoration: BoxDecoration(
                          color: AppColors.secondaryColor,
                          borderRadius: BorderRadius.circular(10)),
                      child: Row(
                        children: [
                          Text(
                            "₹ 1",
                            style: FontConstant.styleSemiBold(
                                fontSize: 15, color: AppColors.white),
                          ),
                          SizedBox(
                            width: 10,
                          ),
                          SvgPicture.asset(IconsPath.wallet)
                        ],
                      ),
                    )
                  ],
                ),
              ),
              Container(
                height: 1,
                color: Colors.transparent,
                child: Container(
                  height: 1,
                  decoration: BoxDecoration(
                    color: Colors.grey.shade200,
                    boxShadow: [
                      BoxShadow(
                        color: Colors.black.withOpacity(0.2),
                        blurRadius: 4,
                        offset: Offset(0, 2),
                      ),
                    ],
                  ),
                ),
              ),
              Padding(
                padding: const EdgeInsets.all(16.0),
                child: Column(
                  children: [
                    Container(
                        decoration: BoxDecoration(
                            borderRadius: BorderRadius.circular(17),
                            color: AppColors.white,
                            border: Border.all(color: Colors.grey.shade300)),
                        child: Column(
                          children: [
                            ClipRRect(
                              borderRadius: BorderRadius.circular(17),
                              child: Image.asset(
                                ImagePath.homeB,
                                width: double.infinity,
                              ),
                            ),
                            Padding(
                              padding: const EdgeInsets.all(10.0),
                              child: Row(
                                children: [
                                  Expanded(
                                    child: Column(
                                      crossAxisAlignment:
                                          CrossAxisAlignment.start,
                                      children: [
                                        Text(
                                          "Ludo Supreme",
                                          style: FontConstant.styleSemiBold(
                                              fontSize: 18,
                                              color: AppColors.black),
                                        ),
                                        Text(
                                          "Classic Ludo in under 10 mins",
                                          style: FontConstant.styleRegular(
                                              fontSize: 15,
                                              color: AppColors.darkgrey),
                                        ),
                                      ],
                                    ),
                                  ),
                                  ElevatedButton(
                                      onPressed: () {
                                        Get.toNamed(Routes.startPlay);
                                      },
                                      style: ElevatedButton.styleFrom(
                                        backgroundColor: AppColors
                                            .secondaryColor, // ← your color
                                        foregroundColor:
                                            Colors.white, // ← text/icon color
                                        elevation: 4, // ← optional
                                        padding: EdgeInsets.symmetric(
                                            horizontal: 12, vertical: 8),
                                        shape: RoundedRectangleBorder(
                                          // ← optional
                                          borderRadius:
                                              BorderRadius.circular(23),
                                        ),
                                      ),
                                      child: Text(
                                        "Play Now",
                                        style: FontConstant.styleMedium(
                                            fontSize: 15,
                                            color: AppColors.white),
                                      )),
                                ],
                              ),
                            )
                          ],
                        )),
                    SizedBox(
                      height: screenHeight * 0.05,
                    ),
                    Image.asset(
                      ImagePath.homeA,
                      width: double.infinity,
                      fit: BoxFit.contain,
                    )
                  ],
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
