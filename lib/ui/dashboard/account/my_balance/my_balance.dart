import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:ludonew/routes/routes.dart';
import 'package:ludonew/util/constant/contant_color.dart';
import 'package:ludonew/util/constant/images_path.dart';
import 'package:ludonew/widgets/font.dart';

class MyBalance extends StatefulWidget {
  const MyBalance({super.key});

  @override
  State<MyBalance> createState() => _MyBalnaceState();
}

class _MyBalnaceState extends State<MyBalance> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: AppColors.white,
      appBar: AppBar(
        backgroundColor: AppColors.white,
        iconTheme: IconThemeData(color: AppColors.primaryColor),
        title: Text(
          "My Balance",
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
                child: Column(
                  children: [
                    Row(
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: [
                        Text(
                          "Winnings",
                          style: FontConstant.styleRegular(
                              fontSize: 15, color: AppColors.darkgrey),
                        ),
                      ],
                    ),
                    SizedBox(
                      height: 10,
                    ),
                    Text(
                      "₹1",
                      style: FontConstant.styleBold(
                          fontSize: 25, color: AppColors.black),
                    ),
                    SizedBox(
                      height: 10,
                    ),
                    SizedBox(
                      width: double.infinity,
                      child: ElevatedButton(
                          onPressed: () {
                            Get.toNamed(Routes.withdraw);
                          },
                          style: ElevatedButton.styleFrom(
                            backgroundColor:
                                AppColors.primaryColor, // ← your color
                            foregroundColor: Colors.white, // ← text/icon color
                            elevation: 4, // ← optional
                            padding: EdgeInsets.all(13),
                            shape: RoundedRectangleBorder(
                              // ← optional
                              borderRadius: BorderRadius.circular(23),
                            ),
                          ),
                          child: Row(
                            mainAxisAlignment: MainAxisAlignment.center,
                            children: [
                              Icon(Icons.arrow_downward_outlined),
                              Text(
                                "Withdraw",
                                style: FontConstant.styleMedium(
                                    fontSize: 17, color: AppColors.white),
                              ),
                            ],
                          )),
                    ),
                  ],
                ),
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
                    Text("Transaction History",
                        style: FontConstant.styleSemiBold(
                            fontSize: 17, color: AppColors.black)),
        
                            Icon(Icons.arrow_forward_ios, size: 20,color: AppColors.grey,)
                  ])),
                   SizedBox(
                height: 20,
              ),
               Image.asset(
                ImagePath.bonous,
                width: double.infinity,
                fit: BoxFit.contain,
              ), 
                SizedBox(
                height: 20,
              ),
            ],
          ),
        ),
      ),
    );
  }
}
