import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:ludonew/controller/profile_controller.dart';
import 'package:ludonew/util/constant/contant_color.dart';
import 'package:ludonew/util/constant/images_path.dart';
import 'package:ludonew/widgets/font.dart';

class Withdraw extends StatefulWidget {
  const Withdraw({super.key});

  @override
  State<Withdraw> createState() => _Withdraw();
}

class _Withdraw extends State<Withdraw> {
  final ProfileController profileController = Get.put(ProfileController());
  final TextEditingController amountController = TextEditingController();
  final GlobalKey<FormState> _formKey = GlobalKey<FormState>();

  @override
  void initState() {
    // TODO: implement initState
    super.initState();
    WidgetsBinding.instance.addPostFrameCallback((_) {
      profileController.profile(context);
    });
  }

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
      body: Obx(() {
        return Stack(children: [
          Padding(
            padding: const EdgeInsets.all(16.0),
            child: Form(
              key: _formKey,
              child: Column(
                children: [
                  Expanded(
                    child: SingleChildScrollView(
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
                                  border:
                                      Border.all(color: Colors.grey.shade300)),
                              child: Row(
                                  mainAxisAlignment:
                                      MainAxisAlignment.spaceBetween,
                                  children: [
                                    Text("Available for Withdrawal",
                                        style: FontConstant.styleSemiBold(
                                            fontSize: 15,
                                            color: AppColors.black)),
                                    Text(
                                        "₹ ${profileController.member?.wallet ?? ""}",
                                        style: FontConstant.styleSemiBold(
                                            fontSize: 15,
                                            color: AppColors.black)),
                                  ])),
                          SizedBox(
                            height: 20,
                          ),
                          Container(
                              padding: EdgeInsets.all(15),
                              width: double.infinity,
                              decoration: BoxDecoration(
                                  borderRadius: BorderRadius.circular(10),
                                  border:
                                      Border.all(color: Colors.grey.shade300)),
                              child: Column(children: [
                                Align(
                                  alignment: Alignment.centerLeft,
                                  child: Text("Withdrawal Amount",
                                      style: FontConstant.styleSemiBold(
                                          fontSize: 15,
                                          color: AppColors.black)),
                                ),
                                SizedBox(
                                  height: 10,
                                ),
                                TextFormField(
                                  textAlign: TextAlign.center,
                                  keyboardType: TextInputType.number,
                                  decoration: InputDecoration(
                                    filled: true,
                                    fillColor: Colors.white,
                                    hintText: "₹ Enter Amount",
                                    hintStyle: FontConstant.styleSemiBold(
                                        fontSize: 18, color: AppColors.grey),
                                    counterText: "",
                                  ),
                                  validator: (value) {
                                    if (value == null || value.trim().isEmpty) {
                                      return 'Please enter an amount';
                                    }
                                    final amount = double.tryParse(value);
                                    if (amount == null) {
                                      return 'Invalid number';
                                    }
                                    if (amount < 10) {
                                      return 'Minimum ₹10 required';
                                    }
                                    if (amount > 20000) {
                                      return 'Maximum ₹20,000 allowed';
                                    }
                                    return null; // ✅ valid
                                  },
                                ),
                                SizedBox(
                                  height: 10,
                                ),
                                Align(
                                    alignment: Alignment.centerLeft,
                                    child: Text(
                                      "*Min-₹ 10, Max-₹ 20,000",
                                      style: FontConstant.styleRegular(
                                          fontSize: 13,
                                          color: AppColors.darkgrey),
                                    ))
                              ])),
                        ],
                      ),
                    ),
                  ),
                  SizedBox(
                    width: double.infinity,
                    child: ElevatedButton(
                        onPressed: () {
                          if (_formKey.currentState!.validate()) {
                            double amount = double.parse(amountController.text);
                            print("Proceed with withdrawal ₹$amount");
                            // Call your API here
                          }
                        },
                        style: ElevatedButton.styleFrom(
                          backgroundColor: AppColors.primaryColor,
                          foregroundColor: Colors.white,
                          elevation: 4,
                          padding: const EdgeInsets.all(13),
                          shape: RoundedRectangleBorder(
                            borderRadius: BorderRadius.circular(23),
                          ),
                        ),
                        child: Text(
                          "Withdraw",
                          style: FontConstant.styleMedium(
                              fontSize: 17, color: AppColors.white),
                        )),
                  ),
                  SizedBox(
                    height: 20,
                  )
                ],
              ),
            ),
          ),
          if (profileController.isLoading.value)
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
