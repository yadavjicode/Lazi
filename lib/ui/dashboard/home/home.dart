import 'package:carousel_slider/carousel_options.dart';
import 'package:carousel_slider/carousel_slider.dart';
import 'package:flutter/material.dart';
import 'package:flutter_svg/svg.dart';
import 'package:get/get.dart';
import 'package:ludonew/controller/dashbord_banner_controller.dart';
import 'package:ludonew/controller/profile_controller.dart';
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
  final ProfileController profileController = Get.put(ProfileController());

  final DashbordBannerController dashbordBannerController =
      Get.put(DashbordBannerController());

  List<String> bannerA = [];
  List<String> bannerB = [];
  List<String> bannerC = [];
  int _currentIndexA = 0;
  int _currentIndexB = 0;
  int _currentIndexC = 0;

  @override
  void initState() {
    super.initState();
    WidgetsBinding.instance.addPostFrameCallback((_) {
      profileController.profile(context);

      dashbordBannerController.dashboardBanner(context).then((_) {
        setState(() {
          bannerA.add(
              dashbordBannerController.member?.data?.banner?.topBanners1 ?? "");
          bannerA.add(
              dashbordBannerController.member?.data?.banner?.topBanners2 ?? "");
          bannerA.add(
              dashbordBannerController.member?.data?.banner?.topBanners3 ?? "");
          bannerA.add(
              dashbordBannerController.member?.data?.banner?.topBanners4 ?? "");

          bannerB.add(
              dashbordBannerController.member?.data?.banner?.middleBanners1 ??
                  "");
          bannerB.add(
              dashbordBannerController.member?.data?.banner?.middleBanners2 ??
                  "");
          bannerB.add(
              dashbordBannerController.member?.data?.banner?.middleBanners3 ??
                  "");
          bannerB.add(
              dashbordBannerController.member?.data?.banner?.middleBanners4 ??
                  "");

          bannerC.add(
              dashbordBannerController.member?.data?.banner?.bottomBanners1 ??
                  "");
          bannerC.add(
              dashbordBannerController.member?.data?.banner?.bottomBanners2 ??
                  "");
          bannerC.add(
              dashbordBannerController.member?.data?.banner?.bottomBanners3 ??
                  "");
          bannerC.add(
              dashbordBannerController.member?.data?.banner?.bottomBanners4 ??
                  "");
          bannerC.add(
              dashbordBannerController.member?.data?.banner?.bottomBanners5 ??
                  "");
          bannerC.add(
              dashbordBannerController.member?.data?.banner?.bottomBanners6 ??
                  "");
          bannerC.add(
              dashbordBannerController.member?.data?.banner?.bottomBanners7 ??
                  "");
        });
      });
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
          // if (!dashbordBannerController.isLoading.value)
          SafeArea(
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
                      GestureDetector(
                        onTap: () {
                      
                        },
                        child: Icon(
                          Icons.notifications_none,
                          color: AppColors.secondaryColor,
                          size: 35,
                        ),
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
                  color: Colors.grey.shade300,
                ),
                Expanded(
                  child: SingleChildScrollView(
                    child: Column(
                      children: [
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
                              ClipRRect(
                                borderRadius: BorderRadius.circular(10),
                                child: Image.asset(
                                  'assets/images/dash.gif',
                                  width: double.infinity,
                                  gaplessPlayback: true,
                                  fit: BoxFit.cover,
                                ),
                              ),
                              SizedBox(
                                height: screenHeight * 0.02,
                              ),
                              Container(
                                  decoration: BoxDecoration(
                                      borderRadius: BorderRadius.circular(10),
                                      color: AppColors.white,
                                      border: Border.all(
                                          color: Colors.grey.shade300)),
                                  child: Column(
                                    children: [
                                      CarouselSlider.builder(
                                        itemCount: bannerA.length,
                                        itemBuilder:
                                            (context, index, realIndex) {
                                          return ClipRRect(
                                            borderRadius:
                                                BorderRadius.circular(10),
                                            child: Image.network(
                                              "https://lazioludo.com/${bannerA[index]}",
                                              fit: BoxFit.fill,
                                              width: double.infinity,
                                            ),
                                          );
                                        },
                                        options: CarouselOptions(
                                          viewportFraction: 1,
                                          height: 200,
                                          autoPlay: true,
                                          enlargeCenterPage: true,
                                          onPageChanged: (index, reason) {
                                            setState(() {
                                              _currentIndexA = index;
                                            });
                                          },
                                        ),
                                      ),
                                      Row(
                                        mainAxisAlignment:
                                            MainAxisAlignment.center,
                                        children: bannerA
                                            .asMap()
                                            .entries
                                            .map((entry) {
                                          return GestureDetector(
                                            // onTap: () => _carouselController
                                            //     .animateToPage(entry.key),
                                            child: Container(
                                              width: 8.0,
                                              height: 8.0,
                                              margin:
                                                  const EdgeInsets.symmetric(
                                                      vertical: 8.0,
                                                      horizontal: 4.0),
                                              decoration: BoxDecoration(
                                                  shape: BoxShape.circle,
                                                  color: _currentIndexA ==
                                                          entry.key
                                                      ? AppColors.primaryColor
                                                      : Colors.grey),
                                            ),
                                          );
                                        }).toList(),
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
                                                    style: FontConstant
                                                        .styleSemiBold(
                                                            fontSize: 18,
                                                            color: AppColors
                                                                .black),
                                                  ),
                                                  Text(
                                                    "Classic Ludo in under 10 mins",
                                                    style: FontConstant
                                                        .styleRegular(
                                                            fontSize: 15,
                                                            color: AppColors
                                                                .darkgrey),
                                                  ),
                                                ],
                                              ),
                                            ),
                                            ElevatedButton(
                                                onPressed: () {
                                                  Get.toNamed(Routes.startPlay,
                                                      arguments: {
                                                        "type": "2 Player"
                                                      });
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
                                                      horizontal: 12,
                                                      vertical: 8),
                                                  shape: RoundedRectangleBorder(
                                                    // ← optional
                                                    borderRadius:
                                                        BorderRadius.circular(
                                                            23),
                                                  ),
                                                ),
                                                child: Text(
                                                  "Play Now",
                                                  style:
                                                      FontConstant.styleMedium(
                                                          fontSize: 15,
                                                          color:
                                                              AppColors.white),
                                                )),
                                          ],
                                        ),
                                      )
                                    ],
                                  )),
                              SizedBox(
                                height: screenHeight * 0.02,
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
                              Container(
                                decoration: BoxDecoration(
                                    borderRadius: BorderRadius.circular(10),
                                    color: AppColors.white,
                                    border: Border.all(
                                        color: Colors.grey.shade300)),
                                child: Column(
                                  children: [
                                    GestureDetector(
                                      onTap: () {
                                        // Get.toNamed(Routes.startPlay);
                                      },
                                      child: CarouselSlider.builder(
                                        itemCount: bannerC.length,
                                        itemBuilder:
                                            (context, index, realIndex) {
                                          return ClipRRect(
                                            borderRadius:
                                                BorderRadius.circular(10),
                                            child: Image.network(
                                              "https://lazioludo.com/${bannerC[index]}",
                                              fit: BoxFit.fill,
                                              width: double.infinity,
                                            ),
                                          );
                                        },
                                        options: CarouselOptions(
                                          viewportFraction: 1,
                                          height: 200,
                                          autoPlay: true,
                                          enlargeCenterPage: true,
                                          onPageChanged: (index, reason) {
                                            setState(() {
                                              _currentIndexC = index;
                                            });
                                          },
                                        ),
                                      ),
                                    ),
                                    Row(
                                      mainAxisAlignment:
                                          MainAxisAlignment.center,
                                      children:
                                          bannerC.asMap().entries.map((entry) {
                                        return GestureDetector(
                                          // onTap: () => _carouselController
                                          //     .animateToPage(entry.key),
                                          child: Container(
                                            width: 8.0,
                                            height: 8.0,
                                            margin: const EdgeInsets.symmetric(
                                                vertical: 8.0, horizontal: 4.0),
                                            decoration: BoxDecoration(
                                                shape: BoxShape.circle,
                                                color:
                                                    _currentIndexC == entry.key
                                                        ? AppColors.primaryColor
                                                        : AppColors.grey),
                                          ),
                                        );
                                      }).toList(),
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
                                                  "Top Games 🎲",
                                                  style: FontConstant
                                                      .styleSemiBold(
                                                          fontSize: 18,
                                                          color:
                                                              AppColors.black),
                                                ),
                                              ],
                                            ),
                                          ),
                                          ElevatedButton(
                                              onPressed: () {
                                                Get.toNamed(Routes.startPlay,
                                                    arguments: {
                                                      "type": "Weekly"
                                                    });
                                              },
                                              style: ElevatedButton.styleFrom(
                                                backgroundColor: AppColors
                                                    .secondaryColor, // ← your color
                                                foregroundColor: Colors
                                                    .white, // ← text/icon color
                                                elevation: 4, // ← optional
                                                padding: EdgeInsets.symmetric(
                                                    horizontal: 12,
                                                    vertical: 8),
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
                                ),
                              ),
                              SizedBox(
                                height: screenHeight * 0.02,
                              ),
                              Row(
                                children: [
                                  Text(
                                    " Big Rewards🤑",
                                    style: FontConstant.styleSemiBold(
                                        fontSize: 18, color: AppColors.black),
                                  ),
                                ],
                              ),
                              SizedBox(
                                height: screenHeight * 0.01,
                              ),
                              Container(
                                decoration: BoxDecoration(
                                    borderRadius: BorderRadius.circular(10),
                                    color: AppColors.white,
                                    border: Border.all(
                                        color: Colors.grey.shade300)),
                                child: Column(
                                  children: [
                                    GestureDetector(
                                      onTap: () {
                                        // Get.toNamed(Routes.startPlay);
                                      },
                                      child: CarouselSlider.builder(
                                        itemCount: bannerB.length,
                                        itemBuilder:
                                            (context, index, realIndex) {
                                          return ClipRRect(
                                            borderRadius:
                                                BorderRadius.circular(10),
                                            child: Image.network(
                                              "https://lazioludo.com/${bannerB[index]}",
                                              fit: BoxFit.fill,
                                              width: double.infinity,
                                            ),
                                          );
                                        },
                                        options: CarouselOptions(
                                          viewportFraction: 1,
                                          height: 200,
                                          autoPlay: true,
                                          enlargeCenterPage: true,
                                          onPageChanged: (index, reason) {
                                            setState(() {
                                              _currentIndexB = index;
                                            });
                                          },
                                        ),
                                      ),
                                    ),
                                    Row(
                                      mainAxisAlignment:
                                          MainAxisAlignment.center,
                                      children:
                                          bannerB.asMap().entries.map((entry) {
                                        return GestureDetector(
                                          // onTap: () => _carouselController
                                          //     .animateToPage(entry.key),
                                          child: Container(
                                            width: 8.0,
                                            height: 8.0,
                                            margin: const EdgeInsets.symmetric(
                                                vertical: 8.0, horizontal: 4.0),
                                            decoration: BoxDecoration(
                                                shape: BoxShape.circle,
                                                color:
                                                    _currentIndexB == entry.key
                                                        ? AppColors.primaryColor
                                                        : AppColors.grey),
                                          ),
                                        );
                                      }).toList(),
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
                                                  "Big Rewards🤑",
                                                  style: FontConstant
                                                      .styleSemiBold(
                                                          fontSize: 18,
                                                          color:
                                                              AppColors.black),
                                                ),
                                              ],
                                            ),
                                          ),
                                          ElevatedButton(
                                              onPressed: () {
                                                Get.toNamed(Routes.startPlay,
                                                    arguments: {
                                                      "type": "Daily"
                                                    });
                                              },
                                              style: ElevatedButton.styleFrom(
                                                backgroundColor: AppColors
                                                    .secondaryColor, // ← your color
                                                foregroundColor: Colors
                                                    .white, // ← text/icon color
                                                elevation: 4, // ← optional
                                                padding: EdgeInsets.symmetric(
                                                    horizontal: 12,
                                                    vertical: 8),
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
                                ),
                              ),
                              SizedBox(
                                height: screenHeight * 0.02,
                              ),
                              Container(
                                width: double.infinity,
                                decoration: BoxDecoration(
                                    borderRadius: BorderRadius.circular(10),
                                    color: AppColors.white,
                                    border: Border.all(
                                        color: Colors.grey.shade300)),
                                child: ClipRRect(
                                  borderRadius: BorderRadius.circular(10),
                                  child: Image.network(
                                    "https://lazioludo.com/${dashbordBannerController.member?.data?.banner?.beneathBanners1 ?? ""}",
                                    fit: BoxFit.fill,
                                  ),
                                ),
                              ),
                              SizedBox(
                                height: screenHeight * 0.02,
                              ),
                              Container(
                                width: double.infinity,
                                decoration: BoxDecoration(
                                    borderRadius: BorderRadius.circular(10),
                                    color: AppColors.white,
                                    border: Border.all(
                                        color: Colors.grey.shade300)),
                                child: ClipRRect(
                                  borderRadius: BorderRadius.circular(10),
                                  child: Image.network(
                                    "https://lazioludo.com/${dashbordBannerController.member?.data?.banner?.beneathBanners2 ?? ""}",
                                    fit: BoxFit.fill,
                                  ),
                                ),
                              ),
                              SizedBox(
                                height: screenHeight * 0.02,
                              ),
                            ],
                          ),
                        ),
                      ],
                    ),
                  ),
                ),
              ],
            ),
          ),
          if (profileController.isLoading.value ||
              dashbordBannerController.isLoading.value)
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
