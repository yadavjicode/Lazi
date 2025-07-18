import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:intl/intl.dart';
import 'package:ludonew/controller/weekly_game_list_controller.dart';
import 'package:ludonew/online_ludo/online_weekly/online_weekly.dart';
import 'package:ludonew/util/constant/contant_color.dart';
import 'package:ludonew/widgets/font.dart';

class WeeklyRound extends StatefulWidget {
  final String tournamentId;
  final String noOfPlayer;
  final String tournmentTime;
  final String type;
  final String checkType;
  final String userId;
  final String name;
  const WeeklyRound(
      {super.key,
      required this.tournamentId,
      required this.noOfPlayer,
      required this.tournmentTime,
      required this.type,
      required this.checkType,
      required this.userId,
      required this.name});
  @override
  State<WeeklyRound> createState() => _WeeklyRound();
}

class _WeeklyRound extends State<WeeklyRound> {
  final WeeklyGameListController weeklyGameListController =
      Get.put(WeeklyGameListController());

  @override
  void initState() {
    // TODO: implement initState
    super.initState();

    WidgetsBinding.instance.addPostFrameCallback((_) {
      weeklyGameListController.weeklyGameList(
          context,
          widget.tournamentId,
          widget.noOfPlayer,
          widget.tournmentTime,
          'weekly',
          'weekly',
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

  String formatDate(String inputDate) {
    if (inputDate.isEmpty) {
      return "";
    } else {
      DateTime parsedDate = DateTime.parse(inputDate);
      return DateFormat('dd-MM-yyyy').format(parsedDate);
    }
  }

  String getDayName(String dateStr) {
    try {
      DateTime date = DateTime.parse(dateStr);
      List<String> days = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ];
      return days[date.weekday - 1];
    } catch (e) {
      return "";
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: AppColors.primaryColor,
        title: Text(
          "Weekly Contest Level",
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
          weeklyGameListController.isLoading.value
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
                        // Text(
                        //   "${getDayName(weeklyGameListController.member?.dataList?.locksStatus?.startDate ?? "")} - ${getDayName(weeklyGameListController.member?.dataList?.locksStatus?.endDate ?? "")}",
                        //   style: FontConstant.styleMedium(
                        //       fontSize: 15, color: AppColors.white),
                        // ),
                        SizedBox(
                          height: 10,
                        ),
                        ContestTile(
                          levelIcon: imageIcon(
                              1,
                              weeklyGameListController.member?.dataList
                                      ?.locksStatus?.tournamentRound ??
                                  1),
                          title: "ROUND 1",
                          price:
                              "₹ ${weeklyGameListController.member?.dataList?.data?.firstRoundPrice ?? ""}",
                          stateText: checkRound(
                              1,
                              weeklyGameListController.member?.dataList
                                      ?.locksStatus?.tournamentRound ??
                                  1),
                          stateColor: isPlays(
                                  1,
                                  weeklyGameListController.member?.dataList
                                          ?.locksStatus?.tournamentRound ??
                                      1)
                              ? Colors.green
                              : Colors.orangeAccent,
                          isPlay: isPlays(
                              1,
                              weeklyGameListController.member?.dataList
                                      ?.locksStatus?.tournamentRound ??
                                  1),
                          round: weeklyGameListController.member?.dataList
                                  ?.locksStatus?.tournamentRound ??
                              1,
                          isRoundFirst: true,
                          tournamentId: widget.tournamentId,
                          noOfPlayer: widget.noOfPlayer,
                          tournmentTime: widget.tournmentTime,
                          type: widget.type,
                          checkType: widget.checkType,
                          userId: widget.userId,
                          name: widget.name,
                          day: weeklyGameListController
                                  .member?.dataList?.locksStatus?.gameDay ??
                              "",
                          startDate: weeklyGameListController
                                  .member?.dataList?.locksStatus?.startDate ??
                              "",
                          endDate: weeklyGameListController
                                  .member?.dataList?.locksStatus?.endDate ??
                              "",
                          dayRange:
                              "${getDayName(weeklyGameListController.member?.dataList?.locksStatus?.startDate ?? "")} - ${getDayName(weeklyGameListController.member?.dataList?.locksStatus?.endDate ?? "")}",
                        ),
                        ContestTile(
                          levelIcon: imageIcon(
                              2,
                              weeklyGameListController.member?.dataList
                                      ?.locksStatus?.tournamentRound ??
                                  1),
                          title: "ROUND 2",
                          price:
                              "₹ ${weeklyGameListController.member?.dataList?.data?.secondRoundPrice ?? ""}",
                          stateText: checkRound(
                              2,
                              weeklyGameListController.member?.dataList
                                      ?.locksStatus?.tournamentRound ??
                                  1),
                          stateColor: isPlays(
                                  2,
                                  weeklyGameListController.member?.dataList
                                          ?.locksStatus?.tournamentRound ??
                                      1)
                              ? Colors.green
                              : Colors.orangeAccent,
                          isPlay: isPlays(
                              2,
                              weeklyGameListController.member?.dataList
                                      ?.locksStatus?.tournamentRound ??
                                  1),
                          round: weeklyGameListController.member?.dataList
                                  ?.locksStatus?.tournamentRound ??
                              1,
                          isRoundFirst: false,
                          tournamentId: widget.tournamentId,
                          noOfPlayer: widget.noOfPlayer,
                          tournmentTime: widget.tournmentTime,
                          type: widget.type,
                          checkType: widget.checkType,
                          userId: widget.userId,
                          name: widget.name,
                          day: weeklyGameListController
                                  .member?.dataList?.data?.tournamentsDay ??
                              "",
                          startDate: weeklyGameListController
                                  .member?.dataList?.locksStatus?.startDate ??
                              "",
                          endDate: weeklyGameListController
                                  .member?.dataList?.locksStatus?.endDate ??
                              "",
                          dayRange: "",
                        ),
                        ContestTile(
                          levelIcon: imageIcon(
                              3,
                              weeklyGameListController.member?.dataList
                                      ?.locksStatus?.tournamentRound ??
                                  1),
                          title: "ROUND 3",
                          price:
                              "₹ ${weeklyGameListController.member?.dataList?.data?.thirdRoundPrice ?? ""}",
                          stateText: checkRound(
                              3,
                              weeklyGameListController.member?.dataList
                                      ?.locksStatus?.tournamentRound ??
                                  1),
                          stateColor: isPlays(
                                  3,
                                  weeklyGameListController.member?.dataList
                                          ?.locksStatus?.tournamentRound ??
                                      1)
                              ? Colors.green
                              : Colors.orangeAccent,
                          isPlay: isPlays(
                              3,
                              weeklyGameListController.member?.dataList
                                      ?.locksStatus?.tournamentRound ??
                                  1),
                          round: weeklyGameListController.member?.dataList
                                  ?.locksStatus?.tournamentRound ??
                              1,
                          isRoundFirst: false,
                          tournamentId: widget.tournamentId,
                          noOfPlayer: widget.noOfPlayer,
                          tournmentTime: widget.tournmentTime,
                          type: widget.type,
                          checkType: widget.checkType,
                          userId: widget.userId,
                          name: widget.name,
                          day: weeklyGameListController
                                  .member?.dataList?.data?.tournamentsDay ??
                              "",
                          startDate: weeklyGameListController
                                  .member?.dataList?.locksStatus?.startDate ??
                              "",
                          endDate: weeklyGameListController
                                  .member?.dataList?.locksStatus?.endDate ??
                              "",
                          dayRange: "",
                        ),
                        ContestTile(
                          levelIcon: imageIcon(
                              4,
                              weeklyGameListController.member?.dataList
                                      ?.locksStatus?.tournamentRound ??
                                  1),
                          title: "ROUND 4",
                          price:
                              "₹ ${weeklyGameListController.member?.dataList?.data?.thirdRoundPrice ?? ""}",
                          stateText: checkRound(
                              4,
                              weeklyGameListController.member?.dataList
                                      ?.locksStatus?.tournamentRound ??
                                  1),
                          stateColor: isPlays(
                                  4,
                                  weeklyGameListController.member?.dataList
                                          ?.locksStatus?.tournamentRound ??
                                      1)
                              ? Colors.green
                              : Colors.orangeAccent,
                          isPlay: isPlays(
                              4,
                              weeklyGameListController.member?.dataList
                                      ?.locksStatus?.tournamentRound ??
                                  1),
                          round: weeklyGameListController.member?.dataList
                                  ?.locksStatus?.tournamentRound ??
                              1,
                          isRoundFirst: false,
                          tournamentId: widget.tournamentId,
                          noOfPlayer: widget.noOfPlayer,
                          tournmentTime: widget.tournmentTime,
                          type: widget.type,
                          checkType: widget.checkType,
                          userId: widget.userId,
                          name: widget.name,
                          day: weeklyGameListController
                                  .member?.dataList?.data?.tournamentsDay ??
                              "",
                          startDate: weeklyGameListController
                                  .member?.dataList?.locksStatus?.startDate ??
                              "",
                          endDate: weeklyGameListController
                                  .member?.dataList?.locksStatus?.endDate ??
                              "",
                          dayRange: "",
                        ),
                        ContestTile(
                          levelIcon: imageIcon(
                              5,
                              weeklyGameListController.member?.dataList
                                      ?.locksStatus?.tournamentRound ??
                                  1),
                          title: "ROUND 5",
                          price:
                              "₹ ${weeklyGameListController.member?.dataList?.data?.thirdRoundPrice ?? ""}",
                          stateText: checkRound(
                              5,
                              weeklyGameListController.member?.dataList
                                      ?.locksStatus?.tournamentRound ??
                                  1),
                          stateColor: isPlays(
                                  5,
                                  weeklyGameListController.member?.dataList
                                          ?.locksStatus?.tournamentRound ??
                                      1)
                              ? Colors.green
                              : Colors.orangeAccent,
                          isPlay: isPlays(
                              5,
                              weeklyGameListController.member?.dataList
                                      ?.locksStatus?.tournamentRound ??
                                  1),
                          round: weeklyGameListController.member?.dataList
                                  ?.locksStatus?.tournamentRound ??
                              1,
                          isRoundFirst: false,
                          tournamentId: widget.tournamentId,
                          noOfPlayer: widget.noOfPlayer,
                          tournmentTime: widget.tournmentTime,
                          type: widget.type,
                          checkType: widget.checkType,
                          userId: widget.userId,
                          name: widget.name,
                          day: weeklyGameListController
                                  .member?.dataList?.data?.tournamentsDay ??
                              "",
                          startDate: weeklyGameListController
                                  .member?.dataList?.locksStatus?.startDate ??
                              "",
                          endDate: weeklyGameListController
                                  .member?.dataList?.locksStatus?.endDate ??
                              "",
                          dayRange: "",
                        ),
                        ContestTile(
                          levelIcon: imageIcon(
                              6,
                              weeklyGameListController.member?.dataList
                                      ?.locksStatus?.tournamentRound ??
                                  1),
                          title: "SEMI FINAL",
                          price:
                              "₹ ${weeklyGameListController.member?.dataList?.data?.thirdRoundPrice ?? ""}",
                          stateText: checkRound(
                              6,
                              weeklyGameListController.member?.dataList
                                      ?.locksStatus?.tournamentRound ??
                                  1),
                          stateColor: isPlays(
                                  6,
                                  weeklyGameListController.member?.dataList
                                          ?.locksStatus?.tournamentRound ??
                                      1)
                              ? Colors.green
                              : Colors.orangeAccent,
                          isPlay: isPlays(
                              6,
                              weeklyGameListController.member?.dataList
                                      ?.locksStatus?.tournamentRound ??
                                  1),
                          round: weeklyGameListController.member?.dataList
                                  ?.locksStatus?.tournamentRound ??
                              1,
                          isRoundFirst: false,
                          tournamentId: widget.tournamentId,
                          noOfPlayer: widget.noOfPlayer,
                          tournmentTime: widget.tournmentTime,
                          type: widget.type,
                          checkType: widget.checkType,
                          userId: widget.userId,
                          name: widget.name,
                          day: weeklyGameListController
                                  .member?.dataList?.data?.tournamentsDay ??
                              "",
                          startDate: weeklyGameListController
                                  .member?.dataList?.locksStatus?.startDate ??
                              "",
                          endDate: weeklyGameListController
                                  .member?.dataList?.locksStatus?.endDate ??
                              "",
                          dayRange: "",
                        ),
                        ContestTile(
                          levelIcon: imageIcon(
                              7,
                              weeklyGameListController.member?.dataList
                                      ?.locksStatus?.tournamentRound ??
                                  0),
                          title: "FINAL",
                          price:
                              "₹ ${weeklyGameListController.member?.dataList?.data?.finalPrice ?? ""}",
                          stateText: checkRound(
                              7,
                              weeklyGameListController.member?.dataList
                                      ?.locksStatus?.tournamentRound ??
                                  1),
                          stateColor: isPlays(
                                  7,
                                  weeklyGameListController.member?.dataList
                                          ?.locksStatus?.tournamentRound ??
                                      1)
                              ? Colors.green
                              : Colors.orangeAccent,
                          round: weeklyGameListController.member?.dataList
                                  ?.locksStatus?.tournamentRound ??
                              1,
                          isPlay: isPlays(
                              7,
                              weeklyGameListController.member?.dataList
                                      ?.locksStatus?.tournamentRound ??
                                  1),
                          isRoundFirst: false,
                          tournamentId: widget.tournamentId,
                          noOfPlayer: widget.noOfPlayer,
                          tournmentTime: widget.tournmentTime,
                          type: widget.type,
                          checkType: widget.checkType,
                          userId: widget.userId,
                          name: widget.name,
                          day: weeklyGameListController
                                  .member?.dataList?.data?.tournamentsDay ??
                              "",
                          startDate: weeklyGameListController
                                  .member?.dataList?.locksStatus?.startDate ??
                              "",
                          endDate: weeklyGameListController
                                  .member?.dataList?.locksStatus?.endDate ??
                              "",
                          dayRange: "",
                        ),
                      ],
                    ),
                  ),
                ),
        ]);
      }),
    );
  }
}

class ContestTile extends StatefulWidget {
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
  final String day;
  final String startDate;
  final String endDate;
  final String dayRange;

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
      required this.day,
      required this.name,
      required this.startDate,
      required this.endDate,
      required this.dayRange});

  @override
  State<ContestTile> createState() => _ContestTileState();
}

class _ContestTileState extends State<ContestTile> {
  bool isCurrentDateInRange(String startDateStr, String endDateStr) {
    final DateTime now = DateTime.now();
    final DateTime startDate = DateTime.parse(startDateStr);
    final DateTime endDate = DateTime.parse(endDateStr);
    if (startDateStr.isEmpty || endDateStr.isEmpty) {
      return false;
    }

    return now.isAfter(startDate.subtract(const Duration(seconds: 1))) &&
        now.isBefore(endDate.add(const Duration(days: 1)));
  }

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: () {
        if (widget.isPlay) {
          if (isCurrentDateInRange(widget.startDate, widget.endDate)) {
            Get.to(OnlineWeekly(
              userId: widget.userId,
              name: widget.name,
              tournamentId: widget.tournamentId,
              round: widget.round,
            ));
          } else {
            Get.snackbar("Game Status", "Not Play Game");
          }
        } else {
          Get.snackbar("Game Status", widget.stateText);
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
                child: Image.asset(widget.levelIcon, width: 40, height: 40)),
            const SizedBox(width: 12),
            Expanded(
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(
                    widget.title,
                    style: FontConstant.styleSemiBold(
                        fontSize: 15, color: AppColors.white),
                  ),
                  Text(
                    widget.day,
                    style: FontConstant.styleRegular(
                        fontSize: 13, color: AppColors.white),
                  ),
                  if (widget.dayRange.isNotEmpty)
                    Text(
                      widget.dayRange,
                      style: FontConstant.styleRegular(
                          fontSize: 13, color: AppColors.white),
                    ),
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
                  widget.stateText,
                  style: FontConstant.styleSemiBold(
                      fontSize: 13, color: widget.stateColor),
                ),
                const SizedBox(height: 4),
                Text(
                  "Price: ${widget.price}",
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
