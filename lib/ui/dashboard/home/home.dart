import 'package:flutter/material.dart';
import 'package:flutter_svg/svg.dart';
import 'package:get/get.dart';
import 'package:ludonew/controller/profile_controller.dart';
import 'package:ludonew/routes/conssiste.dart';
import 'package:ludonew/routes/routes.dart';
import 'package:ludonew/ui/dashboard/home/superme_leage.dart';
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
  final ProfileController profileController = Get.put(ProfileController());

  @override
  void initState() {
    // TODO: implement initState
    super.initState();
    WidgetsBinding.instance.addPostFrameCallback((_) {
      profileController.profile(context);
    });
  }

  @override
  Widget build(BuildContext context) {
    final double screenWidth = MediaQuery.of(context).size.width;
    final double screenHeight = MediaQuery.of(context).size.height;
    return Scaffold(
      backgroundColor: Colors.grey.shade200,
      body: Obx(() {
        return Stack(children: [
          SafeArea(
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
                        GestureDetector(
                          onTap: () {
                            Get.toNamed(Routes.myBalance);
                          },
                          child: Container(
                              padding: EdgeInsets.symmetric(
                                  horizontal: 12, vertical: 5),
                              decoration: BoxDecoration(
                                  color: AppColors.secondaryColor,
                                  borderRadius: BorderRadius.circular(18)),
                              child: Row(
                                children: [
                                  Text(
                                    "₹ ${profileController.member?.wallet ?? 0}",
                                    style: FontConstant.styleSemiBold(
                                        fontSize: 16, color: AppColors.white),
                                  ),
                                  SizedBox(
                                    width: 5,
                                  ),
                                  SvgPicture.asset(IconsPath.wallet)
                                ],
                              )),
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
                    padding: const EdgeInsets.all(15.0),
                    child: Column(
                      children: [
                        Container(
                            decoration: BoxDecoration(
                                borderRadius: BorderRadius.circular(17),
                                color: AppColors.white,
                                border:
                                    Border.all(color: Colors.grey.shade300)),
                            child: Column(
                              children: [
                                ClipRRect(
                                  borderRadius: BorderRadius.circular(17),
                                  child: Image.asset(
                                    fit: BoxFit.cover,
                                    height: 200,
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
                                            // Get.to(
                                            //     FirstScreen(
                                            //       entryfree: '1',
                                            //     ),
                                            //     duration: Duration(
                                            //         milliseconds: ApiConstants
                                            //             .screenTransitionTime),
                                            //     transition: Transition.rightToLeft);
                                            // Get.toNamed(Routes.startPlay);
                                          },
                                          style: ElevatedButton.styleFrom(
                                            backgroundColor: AppColors
                                                .secondaryColor, // ← your color
                                            foregroundColor: Colors
                                                .white, // ← text/icon color
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
                          height: screenHeight * 0.01,
                        ),
                        Row(
                          children: [
                            Text(
                              "Big Rewards🤑",
                              style: FontConstant.styleSemiBold(
                                  fontSize: 18, color: AppColors.black),
                            ),
                          ],
                        ),
                        SizedBox(
                          height: screenHeight * 0.01,
                        ),
                        GestureDetector(
                          onTap: () {
                            Get.to(SupermeLeaguePage(),
                                duration: Duration(
                                    milliseconds:
                                        ApiConstants.screenTransitionTime),
                                transition: Transition.rightToLeft);

                            // Get.to(LudoTournament());
                          },
                          child: Card(
                            margin: EdgeInsets.all(0),
                            shape: RoundedRectangleBorder(
                                borderRadius: BorderRadius.circular(16)),
                            elevation: 2,
                            child: Row(
                              children: [
                                // Zig-Zag clipped container
                                ClipPath(
                                  clipper: ZigZagClipper(),
                                  child: Container(
                                    width: 180,
                                    height: 150,
                                    decoration: BoxDecoration(
                                        color: Color(0xFF4B0082),
                                        borderRadius:
                                            BorderRadius.circular(12)),
                                    padding: EdgeInsets.all(16),
                                    child: Column(
                                      crossAxisAlignment:
                                          CrossAxisAlignment.start,
                                      mainAxisAlignment:
                                          MainAxisAlignment.center,
                                      children: [
                                        Text(
                                          "Ludo\nSupreme League",
                                          style: FontConstant.styleMedium(
                                              fontSize: 15,
                                              color: AppColors.white),
                                        ),
                                        SizedBox(height: 20),
                                        Text(
                                          "FIRST PRIZE",
                                          style: FontConstant.styleMedium(
                                              fontSize: 12,
                                              color: AppColors.white),
                                        ),
                                        Text(
                                          "₹1.5 LAKH",
                                          style: FontConstant.styleSemiBold(
                                              fontSize: 20,
                                              color: AppColors.white),
                                        ),
                                      ],
                                    ),
                                  ),
                                ),
                                // Right side
                                Expanded(
                                  child: Container(
                                    height: 150,
                                    padding: EdgeInsets.all(8),
                                    decoration: BoxDecoration(
                                        color: Colors.white,
                                        borderRadius:
                                            BorderRadius.circular(12)),
                                    child: Column(
                                      mainAxisAlignment:
                                          MainAxisAlignment.spaceBetween,
                                      crossAxisAlignment:
                                          CrossAxisAlignment.center,
                                      children: [
                                        Text(
                                          "Closes in 06h 56m",
                                          style: FontConstant.styleMedium(
                                              fontSize: 12,
                                              color: AppColors.green),
                                        ),
                                        Text(
                                          "70%",
                                          style: TextStyle(
                                              fontWeight: FontWeight.bold,
                                              fontSize: 15),
                                        ),
                                        Text(
                                          "Assured Winners",
                                          style: FontConstant.styleMedium(
                                              fontSize: 15,
                                              color: Colors.black87),
                                        ),
                                        Column(
                                          children: [
                                            Text("ENTRY",
                                                style: TextStyle(
                                                    color: Colors.grey)),
                                            SizedBox(height: 4),
                                            Container(
                                              padding: EdgeInsets.symmetric(
                                                  vertical: 6, horizontal: 40),
                                              decoration: BoxDecoration(
                                                color: AppColors.secondaryColor,
                                                borderRadius:
                                                    BorderRadius.circular(18),
                                              ),
                                              child: Text(
                                                "₹25",
                                                style: TextStyle(
                                                  fontSize: 16,
                                                  fontWeight: FontWeight.bold,
                                                  color: Colors.white,
                                                ),
                                              ),
                                            ),
                                          ],
                                        )
                                      ],
                                    ),
                                  ),
                                ),
                              ],
                            ),
                          ),
                        ),
                        SizedBox(
                          height: screenHeight * 0.01,
                        ),
                        Row(
                          children: [
                            Text(
                              "Top Games🎲",
                              style: FontConstant.styleSemiBold(
                                  fontSize: 18, color: AppColors.black),
                            ),
                          ],
                        ),
                        SizedBox(
                          height: screenHeight * 0.01,
                        ),
                        GestureDetector(
                          onTap: () {
                            Get.toNamed(Routes.startPlay);
                          },
                          child: Image.asset(
                            ImagePath.homeA,
                            width: double.infinity,
                            fit: BoxFit.contain,
                          ),
                        ),
                        SizedBox(
                          height: screenHeight * 0.02,
                        ),
                        GestureDetector(
                          onTap: () {
                            Get.toNamed(Routes.startPlay);
                          },
                          child: Image.asset(
                            ImagePath.bonous,
                            width: double.infinity,
                            fit: BoxFit.contain,
                          ),
                        )
                      ],
                    ),
                  ),
                ],
              ),
            ),
          ),
          if (profileController.isLoading.value)
            Center(
              child: CircularProgressIndicator(
                color: AppColors.primaryColor,
              ),
            )
        ]);
      }),
    );
  }
}

class ZigZagClipper extends CustomClipper<Path> {
  @override
  Path getClip(Size size) {
    Path path = Path();
    double zigZagHeight = 5;

    path.moveTo(0, 0);
    path.lineTo(size.width - 10, 0); // Right side

    // Zig-zag edge
    for (double y = 0; y < size.height; y += zigZagHeight * 2) {
      path.lineTo(size.width, y + zigZagHeight);
      path.lineTo(size.width - 20, y + zigZagHeight * 2);
    }

    path.lineTo(size.width - 20, size.height);
    path.lineTo(0, size.height);
    path.close();
    return path;
  }

  @override
  bool shouldReclip(CustomClipper<Path> oldClipper) => false;
}
