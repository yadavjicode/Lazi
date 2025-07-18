import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:ludonew/controller/weekly_win_controlller.dart';
import 'package:ludonew/util/comman_code/comman_code.dart';
import 'package:ludonew/util/constant/contant_color.dart';
import 'package:ludonew/widgets/font.dart';

class WeeklyWin extends StatefulWidget {
  const WeeklyWin({super.key});

  @override
  State<WeeklyWin> createState() => _WeeklyWinState();
}

class _WeeklyWinState extends State<WeeklyWin> {
  final WeeklyWinController weeklyWinController =
      Get.put(WeeklyWinController());

  @override
  void initState() {
    // TODO: implement initState
    super.initState();
    WidgetsBinding.instance.addPostFrameCallback((_) {
      weeklyWinController.weeklyWin(context);
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: AppColors.white,
      appBar: AppBar(
        backgroundColor: AppColors.primaryColor,
        title: Text(
          "Weekly Win",
          style:
              FontConstant.styleSemiBold(fontSize: 20, color: AppColors.white),
        ),
        iconTheme: IconThemeData(color: AppColors.white),
      ),
      body: Stack(children: [
        Container(
          decoration: const BoxDecoration(
            image: DecorationImage(
              image: AssetImage(
                  'assets/images/screen.png'), // ✅ your background image
              fit: BoxFit.cover,
            ),
          ),
        ),
        Obx(() {
          if (weeklyWinController.isLoading.value) {
            return Center(
              child: CircularProgressIndicator(
                color: AppColors.primaryColor,
              ),
            );
          } else {
            return Padding(
                padding: const EdgeInsets.symmetric(horizontal: 16),
                child: ListView.builder(
                    shrinkWrap: true,
                    // physics: NeverScrollableScrollPhysics(),
                    itemCount: weeklyWinController.weeklyList.length,
                    padding: EdgeInsets.symmetric(vertical: 16),
                    itemBuilder: (context, index) {
                      final item = weeklyWinController.weeklyList[index];
                      return Container(
                          padding: EdgeInsets.symmetric(
                              horizontal: 10, vertical: 10),
                          margin: EdgeInsets.only(bottom: 10),
                          width: double.infinity,
                          decoration: BoxDecoration(
                              color: Colors.black.withOpacity(0.2),
                              borderRadius: BorderRadius.circular(10)),
                          child: Column(
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: [
                              Text(
                                "Date: ${CommanCode.formatDateTime(item.createdAt)}",
                                style: FontConstant.styleMedium(
                                    fontSize: 13, color: AppColors.white),
                              ),
                              Row(
                                mainAxisAlignment:
                                    MainAxisAlignment.spaceBetween,
                                children: [
                                  Text(
                                    "Tournament Id: ${item.tournamentId}",
                                    style: FontConstant.styleMedium(
                                        fontSize: 13, color: AppColors.white),
                                  ),
                                  Text(
                                      "Round : ${item.tournamentRound}/${item.totalTournamentRound}",
                                      style: FontConstant.styleMedium(
                                          fontSize: 13,
                                          color: AppColors.white)),
                                ],
                              ),
                              SizedBox(
                                height: 10,
                              ),
                              SingleChildScrollView(
                                scrollDirection: Axis.horizontal,
                                child: Row(
                                  mainAxisAlignment: MainAxisAlignment.start,
                                  children: [
                                    Container(
                                      margin: EdgeInsets.only(right: 10),
                                      padding: EdgeInsets.symmetric(
                                          horizontal: 5, vertical: 5),
                                      decoration: BoxDecoration(
                                          color: AppColors.white,
                                          borderRadius:
                                              BorderRadius.circular(5)),
                                      child: Column(
                                        children: [
                                          CircleAvatar(
                                            radius: 30, // adjust as needed
                                            backgroundColor: Colors.grey[
                                                200], // optional fallback background
                                            backgroundImage: item.player1
                                                        ?.profileImage !=
                                                    null
                                                ? NetworkImage(
                                                    "https://lazioludo.com/${item.player1!.profileImage}")
                                                : null,
                                            child: item.player1?.profileImage ==
                                                    null
                                                ? Icon(Icons.person,
                                                    size: 30,
                                                    color: Colors.grey)
                                                : null,
                                          ),
                                          Text(
                                            "${item.player1?.name}",
                                            style: FontConstant.styleRegular(
                                                fontSize: 13,
                                                color: AppColors.black),
                                          ),
                                          Text(
                                            "Player 1",
                                            style: FontConstant.styleRegular(
                                                fontSize: 13,
                                                color: AppColors.black),
                                          ),
                                        ],
                                      ),
                                    ),
                                    if (item.player2 != null)
                                      Container(
                                        margin: EdgeInsets.only(right: 10),
                                        padding: EdgeInsets.symmetric(
                                            horizontal: 5, vertical: 5),
                                        decoration: BoxDecoration(
                                            color: AppColors.white,
                                            borderRadius:
                                                BorderRadius.circular(5)),
                                        child: Column(
                                          children: [
                                            CircleAvatar(
                                              radius: 30, // adjust as needed
                                              backgroundColor: Colors.grey[
                                                  200], // optional fallback background
                                              backgroundImage: item.player2
                                                          ?.profileImage !=
                                                      null
                                                  ? NetworkImage(
                                                      "https://lazioludo.com/${item.player2!.profileImage}")
                                                  : null,
                                              child:
                                                  item.player2?.profileImage ==
                                                          null
                                                      ? Icon(Icons.person,
                                                          size: 30,
                                                          color: Colors.grey)
                                                      : null,
                                            ),
                                            Text(
                                              "${item.player2?.name}",
                                              style: FontConstant.styleRegular(
                                                  fontSize: 13,
                                                  color: AppColors.black),
                                            ),
                                            Text(
                                              "Player 2",
                                              style: FontConstant.styleRegular(
                                                  fontSize: 13,
                                                  color: AppColors.black),
                                            ),
                                          ],
                                        ),
                                      ),
                                    if (item.player3 != null)
                                      Container(
                                        margin: EdgeInsets.only(right: 10),
                                        padding: EdgeInsets.symmetric(
                                            horizontal: 5, vertical: 5),
                                        decoration: BoxDecoration(
                                            color: AppColors.white,
                                            borderRadius:
                                                BorderRadius.circular(5)),
                                        child: Column(
                                          children: [
                                            CircleAvatar(
                                              radius: 30, // adjust as needed
                                              backgroundColor: Colors.grey[
                                                  200], // optional fallback background
                                              backgroundImage: item.player3
                                                          ?.profileImage !=
                                                      null
                                                  ? NetworkImage(
                                                      "https://lazioludo.com/${item.player3!.profileImage}")
                                                  : null,
                                              child:
                                                  item.player3?.profileImage ==
                                                          null
                                                      ? Icon(Icons.person,
                                                          size: 30,
                                                          color: Colors.grey)
                                                      : null,
                                            ),
                                            Text(
                                              "${item.player3?.name}",
                                              style: FontConstant.styleRegular(
                                                  fontSize: 13,
                                                  color: AppColors.black),
                                            ),
                                            Text(
                                              "Player 3",
                                              style: FontConstant.styleRegular(
                                                  fontSize: 13,
                                                  color: AppColors.black),
                                            ),
                                          ],
                                        ),
                                      ),
                                    if (item.player4 != null)
                                      Container(
                                        margin: EdgeInsets.only(right: 10),
                                        padding: EdgeInsets.symmetric(
                                            horizontal: 5, vertical: 5),
                                        decoration: BoxDecoration(
                                            color: AppColors.white,
                                            borderRadius:
                                                BorderRadius.circular(5)),
                                        child: Column(
                                          children: [
                                            CircleAvatar(
                                              radius: 30, // adjust as needed
                                              backgroundColor: Colors.grey[
                                                  200], // optional fallback background
                                              backgroundImage: item.player4
                                                          ?.profileImage !=
                                                      null
                                                  ? NetworkImage(
                                                      "https://lazioludo.com/${item.player4!.profileImage}")
                                                  : null,
                                              child:
                                                  item.player4?.profileImage ==
                                                          null
                                                      ? Icon(Icons.person,
                                                          size: 30,
                                                          color: Colors.grey)
                                                      : null,
                                            ),
                                            Text(
                                              "${item.player4?.name}",
                                              style: FontConstant.styleRegular(
                                                  fontSize: 13,
                                                  color: AppColors.black),
                                            ),
                                            Text(
                                              "Player 4",
                                              style: FontConstant.styleRegular(
                                                  fontSize: 13,
                                                  color: AppColors.black),
                                            ),
                                          ],
                                        ),
                                      ),
                                  ],
                                ),
                              )
                            ],
                          ));
                    }));
          }
        }),
      ]),
    );
  }
}
