import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:ludonew/controller/check_balance_controller.dart';
import 'package:ludonew/controller/daily_game_list_controller.dart';
import 'package:ludonew/online_ludo/online_daily/online_daily.dart';
import 'package:ludonew/util/constant/contant_color.dart';
import 'package:ludonew/widgets/font.dart';

class DailyRound extends StatefulWidget {
  final String tournamentId;
  final String noOfPlayer;
  final String tournmentTime;
  final String type;
  final String checkType;
  final String userId;
  final String name;
  const DailyRound(
      {super.key,
      required this.tournamentId,
      required this.noOfPlayer,
      required this.tournmentTime,
      required this.type,
      required this.checkType,
      required this.userId,
      required this.name});
  @override
  State<DailyRound> createState() => _DailyRoundState();
}

class _DailyRoundState extends State<DailyRound> {
  final DailyGameListController dailyGameListController =
      Get.put(DailyGameListController());
  final CheckBalanceController checkBalanceController =
      Get.put(CheckBalanceController());

  @override
  void initState() {
    // TODO: implement initState
    super.initState();

    WidgetsBinding.instance.addPostFrameCallback((_) {
      dailyGameListController.dailyGameList(
          context,
          widget.tournamentId,
          widget.noOfPlayer,
          widget.tournmentTime,
          'daily',
          'daily',
          widget.userId,
          widget.name);
    });
  }

  String checkRound(int round, int currentRound) {
    if (round == currentRound) {
      return "Play";
    } else if (round > currentRound) {
      return "Yet to Play";
    } else {
      return "Completed";
    }
  }

  String imageIcon(int round, int currentRound) {
    if (round == currentRound) {
      return "assets/images/${round}.png";
    } else if (round > currentRound) {
      return "assets/images/lock.png";
    } else {
      return "assets/images/check.png";
    }
  }

  bool isPlays(int round, int currentRound) {
    if (round == currentRound) {
      return true;
    } else {
      return false;
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: AppColors.primaryColor,
        title: Text(
          "Daily Contest Level",
          style:
              FontConstant.styleSemiBold(fontSize: 20, color: AppColors.white),
        ),
        iconTheme: IconThemeData(color: AppColors.white),
      ),
      body: Obx(() {
        return Stack(children: [
          Container(
            decoration: const BoxDecoration(
              image: DecorationImage(
                image: AssetImage(
                    'assets/images/screen.png'), // ✅ your background image
                fit: BoxFit.cover,
              ),
            ),
          ),
          dailyGameListController.isLoading.value
              ? Center(
                  child: CircularProgressIndicator(
                    color: AppColors.primaryColor,
                  ),
                )
              : SingleChildScrollView(
                  child: Padding(
                    padding: const EdgeInsets.all(16.0),
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        ContestTile(
                            levelIcon: imageIcon(
                                1,
                                dailyGameListController.member?.dataList
                                        ?.lockStatus?.tournamentRound ??
                                    1),
                            title: "ROUND 1",
                            price:
                                "₹ ${dailyGameListController.member?.dataList?.data?.firstRoundPrice ?? ""}",
                            stateText: checkRound(
                                1,
                                dailyGameListController.member?.dataList
                                        ?.lockStatus?.tournamentRound ??
                                    1),
                            stateColor: isPlays(
                                    1,
                                    dailyGameListController.member?.dataList
                                            ?.lockStatus?.tournamentRound ??
                                        1)
                                ? Colors.green
                                : Colors.orangeAccent,
                            isPlay: isPlays(
                                1,
                                dailyGameListController.member?.dataList
                                        ?.lockStatus?.tournamentRound ??
                                    1),
                            round: dailyGameListController.member?.dataList
                                    ?.lockStatus?.tournamentRound ??
                                1,
                            isRoundFirst: true,
                            tournamentId: widget.tournamentId,
                            noOfPlayer: widget.noOfPlayer,
                            tournmentTime: widget.tournmentTime,
                            type: widget.type,
                            checkType: widget.checkType,
                            userId: widget.userId,
                            name: widget.name),
                        ContestTile(
                            levelIcon: imageIcon(
                                2,
                                dailyGameListController.member?.dataList
                                        ?.lockStatus?.tournamentRound ??
                                    1),
                            title: "ROUND 2",
                            price:
                                "₹ ${dailyGameListController.member?.dataList?.data?.secondRoundPrice ?? ""}",
                            stateText: checkRound(
                                2,
                                dailyGameListController.member?.dataList
                                        ?.lockStatus?.tournamentRound ??
                                    1),
                            stateColor: isPlays(
                                    2,
                                    dailyGameListController.member?.dataList
                                            ?.lockStatus?.tournamentRound ??
                                        1)
                                ? Colors.green
                                : Colors.orangeAccent,
                            isPlay: isPlays(
                                2,
                                dailyGameListController.member?.dataList
                                        ?.lockStatus?.tournamentRound ??
                                    1),
                            round: dailyGameListController.member?.dataList
                                    ?.lockStatus?.tournamentRound ??
                                1,
                            isRoundFirst: false,
                            tournamentId: widget.tournamentId,
                            noOfPlayer: widget.noOfPlayer,
                            tournmentTime: widget.tournmentTime,
                            type: widget.type,
                            checkType: widget.checkType,
                            userId: widget.userId,
                            name: widget.name),
                        ContestTile(
                            levelIcon: imageIcon(
                                3,
                                dailyGameListController.member?.dataList
                                        ?.lockStatus?.tournamentRound ??
                                    1),
                            title: "ROUND 3",
                            price:
                                "₹ ${dailyGameListController.member?.dataList?.data?.thirdRoundPrice ?? ""}",
                            stateText: checkRound(
                                3,
                                dailyGameListController.member?.dataList
                                        ?.lockStatus?.tournamentRound ??
                                    1),
                            stateColor: isPlays(
                                    3,
                                    dailyGameListController.member?.dataList
                                            ?.lockStatus?.tournamentRound ??
                                        1)
                                ? Colors.green
                                : Colors.orangeAccent,
                            isPlay: isPlays(
                                3,
                                dailyGameListController.member?.dataList
                                        ?.lockStatus?.tournamentRound ??
                                    1),
                            round: dailyGameListController.member?.dataList
                                    ?.lockStatus?.tournamentRound ??
                                1,
                            isRoundFirst: false,
                            tournamentId: widget.tournamentId,
                            noOfPlayer: widget.noOfPlayer,
                            tournmentTime: widget.tournmentTime,
                            type: widget.type,
                            checkType: widget.checkType,
                            userId: widget.userId,
                            name: widget.name),
                        ContestTile(
                            levelIcon: imageIcon(
                                4,
                                dailyGameListController.member?.dataList
                                        ?.lockStatus?.tournamentRound ??
                                    0),
                            title: "FINAL",
                            price:
                                "₹ ${dailyGameListController.member?.dataList?.data?.finalPrice ?? ""}",
                            stateText: checkRound(
                                4,
                                dailyGameListController.member?.dataList
                                        ?.lockStatus?.tournamentRound ??
                                    1),
                            stateColor: isPlays(
                                    4,
                                    dailyGameListController.member?.dataList
                                            ?.lockStatus?.tournamentRound ??
                                        1)
                                ? Colors.green
                                : Colors.orangeAccent,
                            round: dailyGameListController.member?.dataList
                                    ?.lockStatus?.tournamentRound ??
                                1,
                            isPlay: isPlays(
                                4,
                                dailyGameListController.member?.dataList
                                        ?.lockStatus?.tournamentRound ??
                                    1),
                            isRoundFirst: false,
                            tournamentId: widget.tournamentId,
                            noOfPlayer: widget.noOfPlayer,
                            tournmentTime: widget.tournmentTime,
                            type: widget.type,
                            checkType: widget.checkType,
                            userId: widget.userId,
                            name: widget.name),
                      ],
                    ),
                  ),
                ),
          if (checkBalanceController.isLoading.value)
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

class ContestTile extends StatelessWidget {
  final String levelIcon;
  final String title;
  final String price;
  final String stateText;
  final Color stateColor;
  final int round;
  final bool isPlay;
  final bool isRoundFirst;
  final String tournamentId;
  final String noOfPlayer;
  final String tournmentTime;
  final String type;
  final String checkType;
  final String userId;
  final String name;

  const ContestTile(
      {super.key,
      required this.levelIcon,
      required this.title,
      required this.price,
      required this.stateText,
      required this.stateColor,
      required this.isPlay,
      required this.round,
      required this.isRoundFirst,
      required this.tournamentId,
      required this.noOfPlayer,
      required this.tournmentTime,
      required this.type,
      required this.checkType,
      required this.userId,
      required this.name});

  @override
  Widget build(BuildContext context) {
    final CheckBalanceController checkBalanceController =
        Get.put(CheckBalanceController());
    return GestureDetector(
      onTap: () {
        if (isPlay) {
          if (isRoundFirst) {
            checkBalanceController.checkBalance(
                context,
                tournamentId,
                noOfPlayer,
                tournmentTime,
                type,
                checkType,
                userId,
                name,
                round);
          } else {
            Get.to(OnlineDaily(
              userId: userId,
              name: name,
              tournamentId: tournamentId,
              round: round,
            ));
          }
        } else {
          Get.snackbar("Game Status", stateText);
        }
      },
      child: Container(
        margin: const EdgeInsets.only(bottom: 12),
        padding: const EdgeInsets.all(10),
        decoration: BoxDecoration(
          color: Colors.black.withOpacity(0.2),
          borderRadius: BorderRadius.circular(12),
        ),
        child: Row(
          children: [
            Container(
                width: 50,
                height: 50,
                alignment: Alignment.center,
                decoration: BoxDecoration(
                  color: Colors.orange,
                  borderRadius: BorderRadius.circular(10),
                ),
                child: Image.asset(levelIcon, width: 40, height: 40)),
            const SizedBox(width: 12),
            Expanded(
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(
                    title,
                    style: FontConstant.styleSemiBold(
                        fontSize: 15, color: AppColors.white),
                  ),
                  // Text(
                  //   "Status: $status",
                  //   style: FontConstant.styleRegular(
                  //       fontSize: 13, color: AppColors.white),
                  // ),
                  // if (rankVisible)
                  //   Text(
                  //     "Rank:",
                  //     style: FontConstant.styleRegular(
                  //         fontSize: 12, color: AppColors.grey),
                  //   ),
                ],
              ),
            ),
            Column(
              crossAxisAlignment: CrossAxisAlignment.end,
              children: [
                Text(
                  stateText,
                  style: FontConstant.styleSemiBold(
                      fontSize: 13, color: stateColor),
                ),
                const SizedBox(height: 4),
                Text(
                  "Price: $price",
                  style: FontConstant.styleRegular(
                      fontSize: 12, color: AppColors.white),
                ),
              ],
            )
          ],
        ),
      ),
    );
  }
}
