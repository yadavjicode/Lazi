import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:intl/intl.dart';
import 'package:ludonew/controller/check_balance_controller.dart';
import 'package:ludonew/model/subscription_model.dart';
import 'package:ludonew/util/comman_code/comman_code.dart';
import 'package:ludonew/util/constant/contant_color.dart';
import 'package:ludonew/widgets/font.dart';
import 'package:ludonew/widgets/start_timer.dart';

/// 1) PROMOTED CARD
class FourPlayer extends StatefulWidget {
  final List<Players2> players2;
  final String userId;
  final String name;
  final String profileImage;
  const FourPlayer(
      {Key? key,
      required this.players2,
      required this.userId,
      required this.name,
      required this.profileImage})
      : super(key: key);

  @override
  State<FourPlayer> createState() => _FourPlayer();
}

class _FourPlayer extends State<FourPlayer> {
  bool isExpanded = false;

  List<bool> isExpandedList = [];
  final CheckBalanceController checkBalanceController =
      Get.put(CheckBalanceController());

  String formatIfNumeric(String input) {
    final numValue = num.tryParse(input);
    if (numValue != null) {
      // It's a valid number, add rupee sign
      return '₹ ${NumberFormat('#,##0').format(numValue)}';
    } else {
      // Not a number, return as is
      return input;
    }
  }

  @override
  Widget build(BuildContext ctx) {
    return ListView.builder(
      shrinkWrap: true,
      // physics: NeverScrollableScrollPhysics(),
      itemCount: widget.players2.length,
      itemBuilder: (context, index) {
        final item = widget.players2[index];
        return Padding(
          padding: const EdgeInsets.only(top: 5, bottom: 5),
          child: Container(
            decoration: BoxDecoration(
              border: Border.all(color: Colors.grey.shade200),
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
                          padding:
                              EdgeInsets.symmetric(vertical: 2, horizontal: 5),
                          decoration: BoxDecoration(
                            border: Border.all(color: Colors.grey.shade200),
                            borderRadius: BorderRadius.circular(12),
                            color: Colors.grey.shade200,
                          ),
                          child: Row(
                            children: [
                              Icon(
                                Icons.timer_outlined,
                                color: Colors.black,
                                size: 20,
                              ),
                              Text(
                                "${item.timerShow} Sec",
                                style: FontConstant.styleRegular(
                                    fontSize: 12, color: Colors.black),
                              ),
                            ],
                          ),
                        ),
                      ],
                    ),
                  ),
                ),
                SizedBox(height: 10),
                CountdownScreen(),

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
                                  if (CommanCode.checkIfNumeric(item.winPrice))
                                    Image.asset(
                                      "assets/images/coin.png",
                                      height: 15,
                                    ),
                                  Text(
                                    " ${item.winPrice}",
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
                      Image.asset(
                        "assets/images/award.png",
                        height: 30,
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
                              checkBalanceController.checkBalance(
                                  context,
                                  item.id.toString(),
                                  "4",
                                  item.timerShow.toString(),
                                  'offline',
                                  'offline',
                                  widget.userId,
                                  widget.name,
                                  widget.profileImage,
                                  0,
                                  "${item.winPrice}",
                                  "${item.entryFee}");
                            },
                            child: Container(
                              padding: EdgeInsets.symmetric(
                                  vertical: 3, horizontal: 20),
                              decoration: BoxDecoration(
                                border: Border.all(color: AppColors.green),
                                borderRadius: BorderRadius.circular(18),
                                color: AppColors.green,
                              ),
                              child: Row(
                                children: [
                                  Image.asset(
                                    "assets/images/coin.png",
                                    height: 15,
                                  ),
                                  Text(
                                    ' ${item.entryFee}',
                                    style: FontConstant.styleMedium(
                                        fontSize: 16, color: AppColors.white),
                                  ),
                                ],
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
        );
      },
    );
  }
}
