import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:ludonew/model/subscription_model.dart';
import 'package:ludonew/offline_ludo/offline_main%20_screen.dart';
import 'package:ludonew/routes/conssiste.dart';
import 'package:ludonew/ui/start_play/loading_screen.dart';
import 'package:ludonew/util/constant/contant_color.dart';
import 'package:ludonew/widgets/font.dart';

/// 1) PROMOTED CARD
class DailyPlayer extends StatefulWidget {
  final List<Daily> daily;
  const DailyPlayer({
    Key? key,
    required this.daily,
  }) : super(key: key);

  @override
  State<DailyPlayer> createState() => _DailyPlayer();
}

class _DailyPlayer extends State<DailyPlayer> {
  bool isExpanded = false;
  List<bool> isExpandedList = [];

  @override
  Widget build(BuildContext ctx) {
    return ListView.builder(
      shrinkWrap: true,
      // physics: NeverScrollableScrollPhysics(),
      itemCount: widget.daily.length,
      itemBuilder: (context, index) {
        final item = widget.daily[index];
        return GestureDetector(
          onTap: () {
            showTournamentBottomSheet(context, item);
          },
          child: Padding(
            padding: const EdgeInsets.only(top: 5, bottom: 5),
            child: Container(
              decoration: BoxDecoration(
                border: Border.all(
                  color: Colors.grey.shade200,
                ),
                color: AppColors.white,
                borderRadius: BorderRadius.circular(16),
              ),
              child: Column(
                children: [
                  Container(
                    decoration: BoxDecoration(
                        color: Colors.grey.shade200,
                        borderRadius: BorderRadius.only(
                            topLeft: Radius.circular(16),
                            topRight: Radius.circular(16))),
                    child: Padding(
                      padding: const EdgeInsets.all(6.0),
                      child: Row(
                        mainAxisAlignment: MainAxisAlignment.spaceBetween,
                        children: [
                          Row(children: [
                            Icon(Icons.people_outline,
                                size: 18, color: AppColors.black),
                            SizedBox(width: 4),
                            Text("${item.noOfPlayers}",
                                style: FontConstant.styleMedium(
                                    fontSize: 12, color: AppColors.black)),
                          ]),
                          Container(
                            padding: EdgeInsets.symmetric(
                                vertical: 2, horizontal: 5),
                            decoration: BoxDecoration(
                              border: Border.all(color: Colors.grey.shade200),
                              borderRadius: BorderRadius.circular(12),
                              color: Colors.grey.shade200,
                            ),
                            child: Row(
                              children: [
                                Icon(
                                  Icons.timer_outlined,
                                  color: AppColors.black,
                                  size: 20,
                                ),
                                Text(
                                  "${item.timerInSecond} Sec",
                                  style: FontConstant.styleRegular(
                                      fontSize: 12, color: AppColors.black),
                                ),
                              ],
                            ),
                          ),
                        ],
                      ),
                    ),
                  ),
                  SizedBox(height: 5),

                  // values
                  Padding(
                    padding: const EdgeInsets.only(left: 10, right: 10),
                    child: Row(
                      mainAxisAlignment: MainAxisAlignment.spaceBetween,
                      children: [
                        // prize pill
                        Column(
                          children: [
                            Text("PRIZE POOL",
                                style: FontConstant.styleMedium(
                                    fontSize: 11, color: AppColors.darkgrey)),
                            SizedBox(
                              height: 3,
                            ),
                            GestureDetector(
                              onTap: () {
                                setState(() {
                                  isExpanded = !isExpanded;
                                });
                              },
                              child: Container(
                                padding: EdgeInsets.only(
                                    left: 15, right: 15, top: 3, bottom: 3),
                                decoration: BoxDecoration(
                                  color: Colors.grey.shade300,
                                  borderRadius: BorderRadius.circular(18),
                                ),
                                child: Row(
                                  children: [
                                    Text(
                                      '${item.iWinPrice}',
                                      style: FontConstant.styleMedium(
                                        fontSize: 12,
                                        color: AppColors.black,
                                      ),
                                    ),
                                  ],
                                ),
                              ),
                            ),
                          ],
                        ),

                        Column(
                          children: [
                            Text("ENTRY",
                                style: FontConstant.styleMedium(
                                    fontSize: 11, color: AppColors.darkgrey)),
                            SizedBox(
                              height: 3,
                            ),
                            GestureDetector(
                              onTap: () {
                                 Get.to(FirstScreen(
                                tournmentId: item.id.toString(),
                                noOfPlayer: item.noOfPlayers.toString(),
                                tournmentTime: item.timerInSecond.toString(),
                              ));
                                // Get.toNamed(Routes.loadingScreen);
                              },
                              child: Container(
                                padding: EdgeInsets.symmetric(
                                    vertical: 3, horizontal: 20),
                                decoration: BoxDecoration(
                                  border: Border.all(color: AppColors.green),
                                  borderRadius: BorderRadius.circular(18),
                                  color: AppColors.green,
                                ),
                                child: Text(
                                  '₹ ${item.entryPrice}',
                                  style: FontConstant.styleMedium(
                                      fontSize: 16, color: AppColors.white),
                                ),
                              ),
                            ),
                          ],
                        ),
                      ],
                    ),
                  ),

                  SizedBox(
                    height: 5,
                  )
                ],
              ),
            ),
          ),
        );
      },
    );
  }

  void showTournamentBottomSheet(BuildContext context, Daily daily) {
    showModalBottomSheet(
      context: context,
      isScrollControlled: true,
      backgroundColor: Colors.transparent, // This is crucial
      builder: (_) {
        return ClipRRect(
          borderRadius: BorderRadius.vertical(top: Radius.circular(20)),
          child: Container(
            decoration: BoxDecoration(
              color: AppColors.secondaryColor,
              borderRadius: BorderRadius.vertical(top: Radius.circular(20)),
              border: Border.all(color: Colors.yellow, width: 2),
            ),
            padding: EdgeInsets.symmetric(horizontal: 16, vertical: 16),
            child: Column(
              mainAxisSize: MainAxisSize.min,
              children: [
                Container(
                  decoration: BoxDecoration(
                    color: Colors.yellow,
                    borderRadius: BorderRadius.circular(6),
                  ),
                  padding: EdgeInsets.symmetric(horizontal: 12, vertical: 8),
                  child: Text(daily.tournamentsName,
                      style: FontConstant.styleSemiBold(
                          fontSize: 17, color: AppColors.black)),
                ),
                SizedBox(height: 10),
                Text("Entry: ₹ ${daily.entryPrice}",
                    style: FontConstant.styleSemiBold(
                        fontSize: 17, color: Colors.yellow)),
                SizedBox(height: 16),
                Container(
                  decoration: BoxDecoration(
                    color: AppColors.primaryColor,
                    borderRadius: BorderRadius.circular(12),
                  ),
                  padding: EdgeInsets.all(12),
                  child: Column(
                    children: [
                      rowItem("Rank", "Price", "Round", isHeader: true),
                      rowItem("–", "₹ ${daily.firstRoundPrice}", "First Round"),
                      rowItem(
                          "–", "₹ ${daily.secondRoundPrice}", "Second Round"),
                      rowItem("–", "₹ ${daily.thirdRoundPrice}", "Third Round"),
                      rowItem("IV", "₹ ${daily.iVWinPrice}", "Final"),
                      rowItem("III", "₹ ${daily.iIIWinPrice}", "Final"),
                      rowItem("II", "₹ ${daily.iIWinPrice}", "Final"),
                      rowItem("I", "₹ ${daily.iWinPrice}", "Final"),
                    ],
                  ),
                ),
                SizedBox(height: 20),
              ],
            ),
          ),
        );
      },
    );
  }

  Widget rowItem(String rank, String price, String round,
      {bool isHeader = false}) {
    return Container(
      margin: EdgeInsets.only(top: 5),
      decoration: BoxDecoration(
          color: isHeader ? AppColors.primaryColor : AppColors.secondaryColor,
          borderRadius: BorderRadius.circular(10)),
      child: Padding(
        padding: const EdgeInsets.symmetric(vertical: 8.0, horizontal: 8),
        child: Row(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: [
            Expanded(
              child: Text(rank,
                  style: isHeader
                      ? FontConstant.styleSemiBold(
                          fontSize: 13, color: AppColors.white)
                      : FontConstant.styleMedium(
                          fontSize: 13, color: AppColors.white)),
            ),
            Expanded(
              child: Text(price,
                  style: isHeader
                      ? FontConstant.styleSemiBold(
                          fontSize: 13, color: AppColors.white)
                      : FontConstant.styleMedium(
                          fontSize: 13, color: AppColors.white)),
            ),
            Expanded(
              child: Text(round,
                  style: isHeader
                      ? FontConstant.styleSemiBold(
                          fontSize: 13, color: AppColors.white)
                      : FontConstant.styleMedium(
                          fontSize: 13, color: AppColors.white)),
            ),
          ],
        ),
      ),
    );
  }

  Widget divider() {
    return Divider(color: Colors.white24, height: 1);
  }
}
