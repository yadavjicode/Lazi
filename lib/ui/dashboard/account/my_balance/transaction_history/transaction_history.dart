import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:ludonew/controller/transaction_history_Controller.dart';
import 'package:ludonew/model/transaction_history_model.dart';
import 'package:ludonew/util/constant/contant_color.dart';
import 'package:ludonew/widgets/font.dart';

class TransactionHistory extends StatefulWidget {
  const TransactionHistory({super.key});

  @override
  State<TransactionHistory> createState() => _TransactionHistory();
}

class _TransactionHistory extends State<TransactionHistory> {
  final TransactionHistoryController transactionHistoryController =
      Get.put(TransactionHistoryController());

  List<TransactionHistoryList> trasactionHistoryList = [];

  @override
  void initState() {
    // TODO: implement initState
    super.initState();
    WidgetsBinding.instance.addPostFrameCallback((_) {
      transactionHistoryController.transactionHistory(context).then((_) {
        trasactionHistoryList =
            transactionHistoryController.member?.transactionHistory ?? [];
      });
    });
  }

  String formatDateTime(String input) {
    try {
      DateTime dateTime = DateTime.parse(input)
          .toLocal(); // Converts from UTC to local time if needed
      String formatted =
          "${_twoDigits(dateTime.hour)}:${_twoDigits(dateTime.minute)}:${_twoDigits(dateTime.second)} "
          "${_twoDigits(dateTime.day)}-${_twoDigits(dateTime.month)}-${dateTime.year}";
      return formatted;
    } catch (e) {
      return "Invalid date";
    }
  }

  String _twoDigits(int n) => n.toString().padLeft(2, '0');

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: AppColors.white,
      appBar: AppBar(
        backgroundColor: AppColors.white,
        iconTheme: IconThemeData(color: AppColors.primaryColor),
        title: Text(
          "Transaction History",
          style: FontConstant.styleSemiBold(
              fontSize: 23, color: AppColors.primaryColor),
        ),
      ),
      body: Obx(() {
        return Stack(children: [
          Padding(
            padding: const EdgeInsets.only(left: 16, right: 16),
            child: ListView.builder(
              shrinkWrap: true,
              // physics: NeverScrollableScrollPhysics(),
              itemCount: trasactionHistoryList.length,
              itemBuilder: (context, index) {
                final item = trasactionHistoryList[index];
                return GestureDetector(
                  onTap: () {},
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
                                mainAxisAlignment:
                                    MainAxisAlignment.spaceBetween,
                                children: [
                                  Text(
                                      "${formatDateTime(item.createdAt ?? "")}",
                                      style: FontConstant.styleMedium(
                                          fontSize: 12,
                                          color: AppColors.black)),
                                  Container(
                                    padding: EdgeInsets.symmetric(
                                        vertical: 2, horizontal: 5),
                                    decoration: BoxDecoration(
                                      border: Border.all(
                                          color: Colors.grey.shade200),
                                      borderRadius: BorderRadius.circular(12),
                                      color: Colors.grey.shade200,
                                    ),
                                    child: Text(
                                      "${item.transactionId}",
                                      style: FontConstant.styleRegular(
                                          fontSize: 12, color: AppColors.black),
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
                              children: [
                                Icon(
                                  (item.status ?? "") == "CREDIT"
                                      ? Icons.arrow_circle_down_sharp
                                      : Icons.arrow_circle_up_sharp,
                                  color: (item.status ?? "") == "CREDIT"
                                      ? AppColors.green
                                      : AppColors.primaryColor,
                                ),
                                SizedBox(
                                  width: 5,
                                ),
                                // prize pill
                                Column(
                                  children: [
                                    Text("₹ ${item.amount}",
                                        style: FontConstant.styleMedium(
                                            fontSize: 15,
                                            color: AppColors.black)),
                                    SizedBox(
                                      height: 3,
                                    ),
                                  ],
                                ),
                                Spacer(),
                                Column(
                                  children: [
                                    SizedBox(
                                      height: 3,
                                    ),
                                    GestureDetector(
                                      onTap: () {},
                                      child: Container(
                                        padding: EdgeInsets.symmetric(
                                            vertical: 3, horizontal: 20),
                                        decoration: BoxDecoration(
                                          border: Border.all(
                                            color:
                                                (item.status ?? "") == "CREDIT"
                                                    ? AppColors.green
                                                    : AppColors.primaryColor,
                                          ),
                                          borderRadius:
                                              BorderRadius.circular(18),
                                          color: (item.status ?? "") == "CREDIT"
                                              ? AppColors.green
                                              : AppColors.primaryColor,
                                        ),
                                        child: Text(
                                          '${item.status}',
                                          style: FontConstant.styleMedium(
                                              fontSize: 16,
                                              color: AppColors.white),
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
            ),
          ),
          if (transactionHistoryController.isLoading.value)
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
