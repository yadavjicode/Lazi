import 'dart:async';

import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:intl/intl.dart';
import 'package:ludonew/api_service/api_service.dart';
import 'package:ludonew/controller/plateform_fee_controller.dart';
import 'package:ludonew/model/check_balance_model.dart';
import 'package:ludonew/offline_ludo/offline_main%20_screen.dart';
import 'package:ludonew/online_ludo/online_four_player/four_player_web_view.dart';
import 'package:ludonew/online_ludo/online_two_player/two_player_web_view.dart';
import 'package:ludonew/online_ludo/online_daily/online_daily.dart';
import 'package:ludonew/online_ludo/online_weekly/online_weekly.dart';
import 'package:ludonew/routes/routes.dart';
import 'package:ludonew/util/comman_code/comman_code.dart';
import 'package:ludonew/util/constant/contant_color.dart';
import 'package:ludonew/widgets/CustomSnackbar.dart';
import 'package:ludonew/widgets/font.dart';

class CheckBalanceController extends GetxController {
  final ApiService apiService = ApiService();
  var isLoading = false.obs;
  CheckBalanceModel? _member;
  String? _error;
  CheckBalanceModel? get member => _member;
  String? get error => _error;

  Future<void> checkBalance(
      BuildContext context,
      String tournamentId,
      String noOfPlayer,
      String tournmentTime,
      String type,
      String checkType,
      String userId,
      String name,
      int round,
      String poolPrice,
      String entryPrice) async {
    isLoading.value = true;
    _error = null;

    try {
      _member = await apiService.checkBalance(tournamentId, checkType);

      if ((_member?.status ?? false)) {
        // CustomSanckbar.showSnackbar(context, _member?.message ?? "", true);
        // if (type == "offline") {
        //   Get.to(FirstScreen(
        //     tournmentId: tournamentId,
        //     noOfPlayer: noOfPlayer,
        //     tournmentTime: tournmentTime,
        //   ));
        // } else if (type == "daily") {
        //   Get.to(OnlineDaily(
        //     userId: userId,
        //     name: name,
        //     tournamentId: tournamentId,
        //     round: round,
        //   ));
        // } else if (type == "weekly") {}
        showConfirmPaymentBottomSheet(context, tournamentId, noOfPlayer,
            tournmentTime, type, userId, name, round, poolPrice, entryPrice);
      } else {
        // CustomSanckbar.showSnackbar(context, _member?.message ?? "", false);
        showInsufficientBalanceSheet(context);
      }
    } catch (e) {
      _error = e.toString();
      print(_error);
      CustomSanckbar.showSnackbar(
          context,
          "Something went wrong while fetching data. Please try again later!",
          false);
    } finally {
      isLoading.value = false;
    }
  }
}

String convertSecondsToMinSec(String input) {
  int seconds = int.tryParse(input) ?? 0;

  int minutes = seconds ~/ 60;
  int remainingSeconds = seconds % 60;

  if (input.isNotEmpty) {
    return "$minutes min $remainingSeconds sec";
  } else {
    return "";
  }
}

void showInsufficientBalanceSheet(BuildContext context) {
  showModalBottomSheet(
    context: context,
    shape: const RoundedRectangleBorder(
      borderRadius: BorderRadius.vertical(top: Radius.circular(20)),
    ),
    isScrollControlled: true,
    backgroundColor: AppColors.white,
    builder: (context) {
      return Padding(
        padding: const EdgeInsets.symmetric(horizontal: 20.0, vertical: 30),
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            Align(
              alignment: Alignment.topRight,
              child: GestureDetector(
                onTap: () => Navigator.pop(context),
                child: const Icon(Icons.close, size: 28),
              ),
            ),
            const SizedBox(height: 10),
            Image.asset(
              "assets/images/transaction.png",
              height: 70,
            ),
            const SizedBox(height: 20),
            Text("Insufficient balance",
                style: FontConstant.styleSemiBold(
                    fontSize: 17, color: AppColors.black)),
            const SizedBox(height: 10),
            Text("Please add money to register for the selected tournament.",
                textAlign: TextAlign.center,
                style: FontConstant.styleRegular(
                    fontSize: 13, color: AppColors.darkgrey)),
            const SizedBox(height: 25),
            SizedBox(
              width: double.infinity,
              height: 48,
              child: ElevatedButton(
                onPressed: () {
                  Navigator.pop(context);
                  Get.toNamed(Routes.myBalance);
                  // Navigate to Add Cash Screen
                },
                style: ElevatedButton.styleFrom(
                  backgroundColor: AppColors.primaryColor,
                  shape: RoundedRectangleBorder(
                    borderRadius: BorderRadius.circular(30),
                  ),
                ),
                child: Text("Add Cash",
                    style: FontConstant.styleSemiBold(
                        fontSize: 15, color: AppColors.white)),
              ),
            ),
            const SizedBox(height: 10),
          ],
        ),
      );
    },
  );
}

void showConfirmPaymentBottomSheet(
    BuildContext context,
    String tournamentId,
    String noOfPlayer,
    String tournmentTime,
    String type,
    String userId,
    String name,
    int round,
    String poolPrice,
    String entryPrice) {
  showModalBottomSheet(
    context: context,
    shape: const RoundedRectangleBorder(
      borderRadius: BorderRadius.vertical(top: Radius.circular(25)),
    ),
    isScrollControlled: true,
    builder: (context) => ConfirmPaymentBottomSheet(
      tournamentId: tournamentId,
      noOfPlayer: noOfPlayer,
      tournmentTime: tournmentTime,
      type: type,
      userId: userId,
      name: name,
      round: round,
      poolPrice: poolPrice,
      entryPrice: entryPrice,
    ),
  );
}

class ConfirmPaymentBottomSheet extends StatefulWidget {
  final String tournamentId;
  final String noOfPlayer;
  final String tournmentTime;
  final String type;
  final String userId;
  final String name;
  final int round;
  final String poolPrice;
  final String entryPrice;
  const ConfirmPaymentBottomSheet({
    super.key,
    required this.tournamentId,
    required this.noOfPlayer,
    required this.tournmentTime,
    required this.type,
    required this.userId,
    required this.name,
    required this.round,
    required this.poolPrice,
    required this.entryPrice,
  });

  @override
  State<ConfirmPaymentBottomSheet> createState() =>
      _ConfirmPaymentBottomSheetState();
}

class _ConfirmPaymentBottomSheetState extends State<ConfirmPaymentBottomSheet> {
  bool isExpanded = false;
  final entryFee = 1.0;
  final prizePool = 0.85;
  final platformFee = 0.15;

  final PlateformFeeController plateformFeeController =
      Get.put(PlateformFeeController());

  @override
  void initState() {
    // TODO: implement initState
    super.initState();
    plateformFeeController.plateFormFee(context);
  }

  String formatIfNumeric(String input) {
    final numValue = num.tryParse(input);
    if (numValue != null) {
      // It's a valid number, add rupee sign
      return '₹${NumberFormat('#,##0').format(numValue)}';
    } else {
      // Not a number, return as is
      return input;
    }
  }

  @override
  Widget build(BuildContext context) {
    return Obx(() {
      return Stack(children: [
        Padding(
          padding: const EdgeInsets.symmetric(horizontal: 16.0, vertical: 24),
          child: Column(
            mainAxisSize: MainAxisSize.min,
            children: [
              Align(
                alignment: Alignment.topRight,
                child: GestureDetector(
                  onTap: () => Navigator.pop(context),
                  child: const Icon(Icons.close, size: 28),
                ),
              ),
              const SizedBox(height: 8),
              Image.asset(
                "assets/images/rupee.png",
                height: 70,
              ),
              const SizedBox(height: 12),
              Text("Confirm Payment",
                  style: FontConstant.styleSemiBold(
                      fontSize: 17, color: AppColors.black)),
              const SizedBox(height: 8),
              Container(
                padding:
                    const EdgeInsets.symmetric(horizontal: 12, vertical: 6),
                decoration: BoxDecoration(
                  color: Colors.blue.shade50,
                  borderRadius: BorderRadius.circular(8),
                ),
                child: Row(
                  mainAxisSize: MainAxisSize.min,
                  children: [
                    Text("REGULAR",
                        style: FontConstant.styleMedium(
                            fontSize: 13, color: AppColors.black)),
                    SizedBox(width: 6),
                    Icon(Icons.timer, size: 16),
                    SizedBox(width: 4),
                    Text("${convertSecondsToMinSec(widget.tournmentTime)} Ludo",
                        style: FontConstant.styleRegular(
                            fontSize: 13, color: AppColors.black)),
                  ],
                ),
              ),
              const SizedBox(height: 20),

              // Entry Fee + Expandable Breakdown
              GestureDetector(
                onTap: () => setState(() => isExpanded = !isExpanded),
                child: Container(
                  width: double.infinity,
                  padding: const EdgeInsets.all(16),
                  decoration: BoxDecoration(
                    border: Border.all(color: Colors.grey.shade300),
                    borderRadius: BorderRadius.circular(12),
                  ),
                  child: Column(
                    children: [
                      Row(
                        children: [
                          Text("Entry Fee",
                              style: FontConstant.styleSemiBold(
                                  fontSize: 14, color: AppColors.black)),
                          const Spacer(),
                          Row(
                            children: [
                              Image.asset(
                                "assets/images/coin.png",
                                height: 15,
                              ),
                              Text(" ${widget.entryPrice}",
                                  style: FontConstant.styleMedium(
                                      fontSize: 13, color: AppColors.black)),
                            ],
                          ),
                          const SizedBox(width: 8),
                          Icon(
                            isExpanded
                                ? Icons.keyboard_arrow_up
                                : Icons.keyboard_arrow_down,
                          ),
                        ],
                      ),
                      if (isExpanded) ...[
                        const SizedBox(height: 10),
                        const Divider(),
                        const SizedBox(height: 10),
                        _buildBreakdownRow("From Bonus", "0"),
                        _buildBreakdownRow("From Cashback", "0"),
                        _buildBreakdownRow("From Winnings & Deposits", "0"),
                        Divider(),
                        Align(
                          alignment: Alignment.centerLeft,
                          child: Text("Entry Fee Breakdown:",
                              style: FontConstant.styleSemiBold(
                                  fontSize: 14, color: AppColors.black)),
                        ),
                        const SizedBox(height: 8),
                        _buildBreakdownRow(
                            "To Prize Pool", "${widget.poolPrice}"),
                        _buildBreakdownRow("To Platform Fee",
                            "${plateformFeeController.member?.data ?? "0.0"} %"),
                      ],
                    ],
                  ),
                ),
              ),
              const SizedBox(height: 20),
              SizedBox(
                width: double.infinity,
                child: ElevatedButton(
                  onPressed: () {
                    Navigator.pop(context);
                    showModalBottomSheet(
                      context: context,
                      isDismissible: false,
                      isScrollControlled: true,
                      backgroundColor: Colors.white,
                      shape: RoundedRectangleBorder(
                        borderRadius:
                            BorderRadius.vertical(top: Radius.circular(20)),
                      ),
                      builder: (_) => CountdownBottomSheet(
                        startSeconds: 5,
                        tournamentId: widget.tournamentId,
                        noOfPlayer: widget.noOfPlayer,
                        tournmentTime: widget.tournmentTime,
                        type: widget.type,
                        userId: widget.userId,
                        name: widget.name,
                        round: widget.round,
                        amount: widget.poolPrice,
                      ),
                    );
                  },
                  style: ElevatedButton.styleFrom(
                    backgroundColor: AppColors.primaryColor,
                    foregroundColor: Colors.black,
                    padding: const EdgeInsets.symmetric(vertical: 14),
                    shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(30),
                    ),
                  ),
                  child: Text("Join Now",
                      style: FontConstant.styleSemiBold(
                          fontSize: 15, color: AppColors.white)),
                ),
              ),
              const SizedBox(height: 10),
            ],
          ),
        ),
        if (plateformFeeController.isLoading.value)
          Center(
            child: SizedBox.shrink(),
          )
      ]);
    });
  }

  Widget _buildBreakdownRow(String title, String value) {
    return Padding(
      padding: const EdgeInsets.symmetric(vertical: 4),
      child: Row(
        children: [
          Text(title,
              style: FontConstant.styleMedium(
                  fontSize: 13, color: AppColors.darkgrey)),
          const Spacer(),
          Row(
            children: [
              if (CommanCode.checkIfNumeric(value))
                Image.asset(
                  "assets/images/coin.png",
                  height: 15,
                ),
              if (CommanCode.checkIfNumeric(value))
                SizedBox(
                  width: 3,
                ),
              Text(value,
                  style: FontConstant.styleMedium(
                      fontSize: 13, color: AppColors.darkgrey)),
            ],
          ),
        ],
      ),
    );
  }
}

class CountdownBottomSheet extends StatefulWidget {
  final int startSeconds;
  final String tournamentId;
  final String noOfPlayer;
  final String tournmentTime;
  final String type;
  final String userId;
  final String name;
  final int round;
  final String amount;
  CountdownBottomSheet(
      {required this.startSeconds,
      required this.tournamentId,
      required this.noOfPlayer,
      required this.tournmentTime,
      required this.type,
      required this.userId,
      required this.name,
      required this.round,
      required this.amount});

  @override
  _CountdownBottomSheetState createState() => _CountdownBottomSheetState();
}

class _CountdownBottomSheetState extends State<CountdownBottomSheet> {
  late int secondsLeft;
  int dotCount = 0;
  Timer? timer;

  @override
  void initState() {
    super.initState();
    secondsLeft = widget.startSeconds;
    timer = Timer.periodic(Duration(milliseconds: 500), (_) {
      setState(() {
        dotCount = (dotCount + 1) % 4; // Cycles 0 → 1 → 2 → 3 → 0
      });
    });
    startTimer();
  }

  void startTimer() {
    timer = Timer.periodic(Duration(seconds: 1), (_) {
      if (secondsLeft <= 1) {
        timer?.cancel();
        Navigator.pop(context);
        if (widget.type == "offline") {
          if (widget.noOfPlayer == "2") {
            print(
                "tournament type =offline   no of player= ${widget.noOfPlayer}  userId ${widget.userId} userName ${widget.name} tournamentId ${widget.tournamentId}");
            Get.to(TwoPlayerWebView(
                userId: widget.userId,
                name: widget.name,
                tournamentId: widget.tournamentId));
          } else if (widget.noOfPlayer == "4") {
            print(
                "tournament type =offline   no of player= ${widget.noOfPlayer}  userId ${widget.userId} userName ${widget.name} tournamentId ${widget.tournamentId}");

            Get.to(FourPlayerWebView(
                userId: widget.userId,
                name: widget.name,
                tournamentId: widget.tournamentId));
          }
          // Get.to(FirstScreen(
          //   tournmentId: widget.tournamentId,
          //   noOfPlayer: widget.noOfPlayer,
          //   tournmentTime: widget.tournmentTime,
          // ));
        } else if (widget.type == "daily") {
          print(
              "tournament type =online_daily   no of player= ${widget.noOfPlayer}  userId ${widget.userId} userName ${widget.name} tournamentId ${widget.tournamentId} round ${widget.round}");
          Get.to(OnlineDaily(
            userId: widget.userId,
            name: widget.name,
            tournamentId: widget.tournamentId,
            round: widget.round,
          ));
        } else if (widget.type == "weekly") {
          print(
              "tournament type =online_weekly   no of player= ${widget.noOfPlayer}  userId ${widget.userId} userName ${widget.name} tournamentId ${widget.tournamentId} round ${widget.round}");
          Get.to(OnlineWeekly(
            userId: widget.userId,
            name: widget.name,
            tournamentId: widget.tournamentId,
            round: widget.round,
          ));
        }
        // Close sheet
      } else {
        setState(() {
          secondsLeft--;
        });
      }
    });
  }

  String formatTime(int totalSeconds) {
    int minutes = totalSeconds ~/ 60;
    int seconds = totalSeconds % 60;
    return '${minutes.toString().padLeft(2, '0')}m:${seconds.toString().padLeft(2, '0')}s';
  }

  @override
  void dispose() {
    timer?.cancel();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    String dots = '.' * dotCount;
    return Padding(
      padding:
          EdgeInsets.only(bottom: MediaQuery.of(context).viewInsets.bottom),
      child: Container(
        width: double.infinity,
        height: 300,
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Image.asset(
              "assets/images/timer.gif",
              height: 70,
            ),
            SizedBox(height: 16),
            Text(
              'Game starting in$dots',
              style: FontConstant.styleMedium(
                  fontSize: 17, color: AppColors.primaryColor),
            ),
            SizedBox(height: 12),
            Container(
              key: ValueKey(secondsLeft),
              padding: EdgeInsets.symmetric(horizontal: 20, vertical: 8),
              decoration: BoxDecoration(
                color: AppColors.primaryColor,
                borderRadius: BorderRadius.circular(20),
              ),
              child: Text(
                formatTime(secondsLeft),
                style: TextStyle(
                    color: Colors.white,
                    fontSize: 20,
                    fontWeight: FontWeight.bold),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
