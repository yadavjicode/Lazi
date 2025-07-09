import 'package:flutter/material.dart';
import 'package:flutter_svg/svg.dart';
import 'package:get/get.dart';
import 'package:ludonew/controller/check_balance_controller.dart';
import 'package:ludonew/controller/profile_controller.dart';
import 'package:ludonew/controller/subscription_controller.dart';
import 'package:ludonew/routes/routes.dart';
import 'package:ludonew/ui/start_play/tournament/daily_player.dart';
import 'package:ludonew/ui/start_play/tournament/four_player.dart';
import 'package:ludonew/ui/start_play/tournament/two_player.dart';
import 'package:ludonew/ui/start_play/tournament/weekly_player.dart';
import 'package:ludonew/util/constant/contant_color.dart';
import 'package:ludonew/util/constant/icons_path.dart';
import 'package:ludonew/util/constant/images_path.dart';
import 'package:ludonew/widgets/font.dart';

class StartPlay extends StatefulWidget {
  const StartPlay({super.key});

  @override
  State<StartPlay> createState() => _StartPlayState();
}

class _StartPlayState extends State<StartPlay> {
  bool isExpanded = false;
  final List<String> filters = ['2 Player', '4 Player', 'Daily', 'Weekly'];
  String selectedFilter = '2 Player';
  final SubscriptionController subscriptionController =
      Get.put(SubscriptionController());
  final ProfileController profileController = Get.put(ProfileController());
  final CheckBalanceController checkBalanceController =
      Get.put(CheckBalanceController());

  @override
  void initState() {
    // TODO: implement initState
    super.initState();
    final args = Get.arguments as Map<String, dynamic>;
    setState(() {
      selectedFilter = args['type'] ?? '';
    });

    WidgetsBinding.instance.addPostFrameCallback((_) {
      subscriptionController.getSubs(context);
    });
  }

  @override
  Widget build(BuildContext context) {
    final double screenWidth = MediaQuery.of(context).size.width;
    final double screenHeight = MediaQuery.of(context).size.height;

    return Scaffold(
      backgroundColor: AppColors.primaryColor,
      body: Obx(() {
        return Stack(children: [
          SafeArea(
              child: Column(
            children: [
              Stack(children: [
                Image.asset(
                  ImagePath.startLudo,
                  height: screenHeight * 0.35,
                  width: screenWidth * 1,
                  fit: BoxFit.cover,
                ),
                Padding(
                  padding: const EdgeInsets.all(16.0),
                  child: Container(
                    child: Row(
                      children: [
                        GestureDetector(
                          onTap: () {
                            Get.toNamed(Routes.dasboard);
                          },
                          child: Icon(
                            Icons.arrow_back,
                            color: AppColors.white,
                          ),
                        ),
                        Spacer(),
                        Container(
                            padding: EdgeInsets.all(7),
                            decoration: BoxDecoration(
                              color: AppColors.white,
                              shape: BoxShape.circle,
                            ),
                            child: SvgPicture.asset(IconsPath.youtube)),
                        SizedBox(
                          width: 10,
                        ),
                        GestureDetector(
                          onTap: () {
                            Get.toNamed(Routes.myBalance);
                          },
                          child: Container(
                            padding: EdgeInsets.symmetric(
                                horizontal: 15, vertical: 5),
                            decoration: BoxDecoration(
                                color: AppColors.white,
                                borderRadius: BorderRadius.circular(18)),
                            child: Row(
                              children: [
                                Text(
                                  "₹ ${profileController.member?.wallet ?? 0}",
                                  style: FontConstant.styleSemiBold(
                                      fontSize: 15,
                                      color: AppColors.secondaryColor),
                                ),
                                SizedBox(
                                  width: 10,
                                ),
                                SvgPicture.asset(IconsPath.walletC)
                              ],
                            ),
                          ),
                        )
                      ],
                    ),
                  ),
                ),
              ]),
              Expanded(
                  child: Container(
                decoration: BoxDecoration(
                    color: AppColors.white,
                    borderRadius: BorderRadius.only(
                        topLeft: Radius.circular(20),
                        topRight: Radius.circular(20))),
                child: Padding(
                  padding: const EdgeInsets.only(left: 0, right: 0, top: 16),
                  child: Column(
                    children: [
                      SizedBox(height: 0),
                      SizedBox(
                        height: 40,
                        child: ListView.separated(
                          scrollDirection: Axis.horizontal,
                          itemCount: filters.length,
                          padding: const EdgeInsets.symmetric(horizontal: 16),
                          separatorBuilder: (_, __) =>
                              const SizedBox(width: 10),
                          itemBuilder: (context, index) {
                            final isSelected = selectedFilter == filters[index];
                            return GestureDetector(
                              onTap: () {
                                setState(() {
                                  selectedFilter = filters[index];
                                });
                                // Open same screen or show snack/toast/etc.
                                print('Selected: ${filters[index]}');
                              },
                              child: Container(
                                padding: const EdgeInsets.symmetric(
                                    horizontal: 20, vertical: 10),
                                decoration: BoxDecoration(
                                  color: isSelected
                                      ? Colors.orange
                                      : Colors.purple.shade100,
                                  borderRadius: BorderRadius.circular(10),
                                ),
                                child: Center(
                                  child: Text(
                                    filters[index],
                                    style: TextStyle(
                                      color: Colors.black87,
                                      fontWeight: FontWeight.w500,
                                    ),
                                  ),
                                ),
                              ),
                            );
                          },
                        ),
                      ),
                      SizedBox(height: 15),
                      Expanded(
                        child: Padding(
                          padding: const EdgeInsets.symmetric(horizontal: 16),
                          child: Column(
                            children: [
                              Image.asset(
                                ImagePath.zada,
                                width: screenWidth * 1,
                              ),
                              SizedBox(height: 10),
                              Expanded(child: tournament(selectedFilter)),
                            ],
                          ),
                        ),
                      ),
                    ],
                  ),
                ),
              ))
            ],
          )),
          if (subscriptionController.isLoading.value ||
              checkBalanceController.isLoading.value ||
              profileController.isLoading.value)
            Center(
              child: CircularProgressIndicator(
                color: AppColors.primaryColor,
              ),
            )
        ]);
      }),
    );
  }

  Widget tournament(String key) {
    if (key == "2 Player") {
      return twoPlayer(
        players2: subscriptionController.member?.data?.players2 ?? [],
        userId: "${profileController.member?.id ?? ""}",
        name:
            "${profileController.member?.name ?? "Player${profileController.member?.id ?? ""}"}",
      );
    } else if (key == "4 Player") {
      return FourPlayer(
        players2: subscriptionController.member?.data?.players4 ?? [],
        userId: "${profileController.member?.id ?? ""}",
        name:
            "${profileController.member?.name ?? "Player${profileController.member?.id ?? ""}"}",
      );
    } else if (key == "Weekly") {
      return WeeklyPlayer(
        weekly: subscriptionController.member?.data?.weekly ?? [],
        userId: "${profileController.member?.id ?? ""}",
        name:
            "${profileController.member?.name ?? "Player${profileController.member?.id ?? ""}"}",
      );
    } else if (key == "Daily") {
      return DailyPlayer(
        daily: subscriptionController.member?.data?.daily ?? [],
        userId: "${profileController.member?.id ?? ""}",
        name:
            "${profileController.member?.name ?? "Player${profileController.member?.id ?? ""}"}",
      );
    } else {
      return Text("NO data avilable!");
    }
  }
}
