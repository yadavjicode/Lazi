import 'package:flutter/material.dart';
import 'package:ludonew/util/constant/contant_color.dart';
import 'package:ludonew/util/constant/images_path.dart';
import 'package:ludonew/widgets/font.dart';

class Withdraw extends StatefulWidget {
  const Withdraw({super.key});

  @override
  State<Withdraw> createState() => _Withdraw();
}

class _Withdraw extends State<Withdraw> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: AppColors.white,
      appBar: AppBar(
        backgroundColor: AppColors.white,
        iconTheme: IconThemeData(color: AppColors.primaryColor),
        title: Text(
          "Withdraw Money",
          style: FontConstant.styleSemiBold(
              fontSize: 23, color: AppColors.primaryColor),
        ),
      ),
      body: SingleChildScrollView(
        child: Padding(
          padding: const EdgeInsets.all(16.0),
          child: Column(
            children: [
              Image.asset(
                ImagePath.homeA,
                width: double.infinity,
                fit: BoxFit.contain,
              ),
              SizedBox(
                height: 20,
              ),
              Container(
                  padding: EdgeInsets.all(15),
                  width: double.infinity,
                  decoration: BoxDecoration(
                      borderRadius: BorderRadius.circular(10),
                      border: Border.all(color: Colors.grey.shade300)),
                  child: Row(
                      mainAxisAlignment: MainAxisAlignment.spaceBetween,
                      children: [
                        Text("Available for Withdrawal",
                            style: FontConstant.styleSemiBold(
                                fontSize: 15, color: AppColors.black)),
                        Text("₹ 1",
                            style: FontConstant.styleSemiBold(
                                fontSize: 15, color: AppColors.black)),
                      ])),
              SizedBox(
                height: 20,
              ),
              Container(
                  padding: EdgeInsets.all(15),
                  width: double.infinity,
                  decoration: BoxDecoration(
                      borderRadius: BorderRadius.circular(10),
                      border: Border.all(color: Colors.grey.shade300)),
                  child: Column(children: [
                    Align(
                      alignment: Alignment.centerLeft,
                      child: Text("Withdrawal Amount",
                          style: FontConstant.styleSemiBold(
                              fontSize: 15, color: AppColors.black)),
                    ),
                    SizedBox(
                      height: 10,
                    ),
                    TextField(
                        textAlign: TextAlign.center,
                        keyboardType: TextInputType.number,
                        decoration: InputDecoration(
                          filled: true,
                          fillColor: Colors.white,
                          hintText: "₹ Enter Amount",
                          hintStyle: FontConstant.styleSemiBold(
                              fontSize: 18, color: AppColors.grey),
                          counterText: "",
                        )),
                    SizedBox(
                      height: 10,
                    ),
                    Align(
                        alignment: Alignment.centerLeft,
                        child: Text(
                          "*Min-₹ 1, Max-₹ 20",
                          style: FontConstant.styleRegular(
                              fontSize: 13, color: AppColors.darkgrey),
                        ))
                  ])),
            ],
          ),
        ),
      ),
    );
  }
}
