import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:ludonew/controller/add_Wallet_controller.dart';
import 'package:ludonew/controller/profile_controller.dart';
import 'package:ludonew/util/constant/contant_color.dart';
import 'package:ludonew/widgets/font.dart';
import 'package:razorpay_flutter/razorpay_flutter.dart';

class AddCashPage extends StatefulWidget {
  @override
  State<AddCashPage> createState() => _AddCashPageState();
}

class _AddCashPageState extends State<AddCashPage> {
  final AddWalletController addWalletController =
      Get.put(AddWalletController());
  final ProfileController profileController = Get.put(ProfileController());

  TextEditingController amount = TextEditingController();
  late Razorpay _razorpay;

  @override
  void initState() {
    super.initState();
    _razorpay = Razorpay();
    _razorpay.on(Razorpay.EVENT_PAYMENT_SUCCESS, _handlePaymentSuccess);
    _razorpay.on(Razorpay.EVENT_PAYMENT_ERROR, _handlePaymentError);
    _razorpay.on(Razorpay.EVENT_EXTERNAL_WALLET, _handleExternalWallet);
    amount.addListener(() {
      setState(() {}); // rebuild UI when text changes
    });
  }

  void openCheckout() {
    var options = {
      'key': 'rzp_live_MRorPwHhXBd3Cs', // Replace with your Razorpay Key
      'amount': (double.parse(amount.text) * 100)
          .round(), // Amount in paise i.e. Rs. 500
      'name': 'Lazio',
      'description': 'Lazio Payment',
      'prefill': {
        'contact': profileController.member?.mobileNo ?? "",
        'email': 'test@example.com',
      },
      'external': {
        'wallets': ['paytm']
      }
    };

    try {
      _razorpay.open(options);
    } catch (e) {
      debugPrint('Error: $e');
    }
  }

  void _handlePaymentSuccess(PaymentSuccessResponse response) {
    addWalletController.addWallet(context, amount.text.toString().trim(),
        "${response.paymentId ?? ""}", "SUCCESS");
    // ScaffoldMessenger.of(context).showSnackBar(
    //   SnackBar(content: Text("SUCCESS: ${response.paymentId}")),
    // );
  }

  void _handlePaymentError(PaymentFailureResponse response) {
    ScaffoldMessenger.of(context).showSnackBar(
      SnackBar(content: Text("ERROR: ${response.message}")),
    );
  }

  void _handleExternalWallet(ExternalWalletResponse response) {
    ScaffoldMessenger.of(context).showSnackBar(
      SnackBar(content: Text("WALLET: ${response.walletName}")),
    );
  }

  @override
  void dispose() {
    _razorpay.clear();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.grey.shade100,
      appBar: AppBar(
        backgroundColor: Colors.grey.shade100,
        elevation: 0,
        leading: IconButton(
          icon: Icon(Icons.arrow_back, color: Colors.black),
          onPressed: () {
            Get.back();
          },
        ),
        title: Text('Add Cash', style: TextStyle(color: Colors.black)),
        centerTitle: false,
      ),
      body: Obx(() {
        return Stack(children: [
          Column(
            children: [
              Expanded(
                child: SingleChildScrollView(
                  child: Padding(
                    padding: const EdgeInsets.all(16.0),
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Text('Enter Amount', style: TextStyle(fontSize: 16)),
                        SizedBox(height: 8),
                        Container(
                          padding: EdgeInsets.symmetric(horizontal: 12),
                          decoration: BoxDecoration(
                            color: Colors.white,
                            borderRadius: BorderRadius.circular(24),
                          ),
                          child: TextFormField(
                            keyboardType: TextInputType.number,
                            controller: amount,
                            decoration: InputDecoration(
                              prefixText: '₹ ',
                              border: InputBorder.none,
                              hintText: 'Enter amount here',
                            ),
                          ),
                        ),
                        SizedBox(height: 12),
                        Row(
                          mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                          children: [
                            _amountButton('100'),
                            _amountButton('50'),
                            _amountButton('10'),
                          ],
                        ),
                        SizedBox(height: 16),
                        // Row(
                        //   children: [
                        //     CircleAvatar(
                        //         radius: 12,
                        //         backgroundImage: AssetImage(
                        //             'assets/user.png')), // replace with real image
                        //     SizedBox(width: 8),
                        //     Text('2,21,170 Players ',
                        //         style: TextStyle(fontWeight: FontWeight.bold)),
                        //     Text('added cash today',
                        //         style: TextStyle(color: Colors.green)),
                        //   ],
                        // ),
                        // SizedBox(height: 16),
                        // Row(
                        //   children: [
                        //     Text('Coupon code? ',
                        //         style: TextStyle(fontWeight: FontWeight.bold)),
                        //     Text('APPLY',
                        //         style: TextStyle(
                        //             color: Colors.purple,
                        //             fontWeight: FontWeight.bold)),
                        //   ],
                        // ),
                        // SizedBox(height: 16),
                        // Container(
                        //   padding: EdgeInsets.all(12),
                        //   decoration: BoxDecoration(
                        //     color: Colors.purple.shade50,
                        //     borderRadius: BorderRadius.circular(12),
                        //   ),
                        //   child: Column(
                        //     crossAxisAlignment: CrossAxisAlignment.start,
                        //     children: [
                        //       Row(
                        //         children: [
                        //           Expanded(
                        //               child: Text(
                        //             'ZUPEESWAGAT',
                        //             style: TextStyle(
                        //                 fontWeight: FontWeight.bold,
                        //                 fontSize: 16),
                        //           )),
                        //           Text('APPLY',
                        //               style: TextStyle(
                        //                   color: Colors.purple,
                        //                   fontWeight: FontWeight.bold)),
                        //         ],
                        //       ),
                        //       SizedBox(height: 4),
                        //       Text('100% Instant Cashback',
                        //           style:
                        //               TextStyle(fontWeight: FontWeight.bold)),
                        //       Text(
                        //           'Minimum ₹10\nApplicable only on first deposit',
                        //           style: TextStyle(fontSize: 12)),
                        //     ],
                        //   ),
                        // ),
                      ],
                    ),
                  ),
                ),
              ),
              Padding(
                padding: const EdgeInsets.all(16.0),
                child: Column(
                  children: [
                    Center(
                        child: Text('100% safe & secure',
                            style: TextStyle(color: Colors.grey))),
                    SizedBox(height: 8),
                    ElevatedButton(
                      onPressed: (amount.text.isNotEmpty &&
                              int.tryParse(amount.text) != null &&
                              int.parse(amount.text) > 0)
                          ? () {
                              if (!addWalletController.isLoading.value) {
                                openCheckout();
                                // addWalletController.addWallet(
                                //     context,
                                //     amount.text.toString().trim(),
                                //     "rehgrthryjhy",
                                //     "SUCCESS",
                                //     "43635");
                              }
                            }
                          : null, // disables button
                      style: ElevatedButton.styleFrom(
                        minimumSize: Size(double.infinity, 48),
                        backgroundColor: (amount.text.isNotEmpty &&
                                int.tryParse(amount.text) != null &&
                                int.parse(amount.text) > 0)
                            ? AppColors.primaryColor
                            : Colors.grey.shade400,
                        shape: RoundedRectangleBorder(
                          borderRadius: BorderRadius.circular(30),
                        ),
                      ),
                      child: Text(
                        'Add Cash',
                        style: FontConstant.styleRegular(
                          fontSize: 15,
                          color: (amount.text.isNotEmpty &&
                                  int.tryParse(amount.text) != null &&
                                  int.parse(amount.text) > 0)
                              ? AppColors.white
                              : AppColors.black,
                        ),
                      ),
                    ),
                  ],
                ),
              )
            ],
          ),
          if (addWalletController.isLoading.value)
            Center(
              child: CircularProgressIndicator(
                color: AppColors.primaryColor,
              ),
            )
        ]);
      }),
    );
  }

  Widget _amountButton(String label) {
    return GestureDetector(
      onTap: () {
        amount.text = label;
      },
      child: Container(
        padding: EdgeInsets.symmetric(horizontal: 24, vertical: 12),
        decoration: BoxDecoration(
          color: Colors.white,
          borderRadius: BorderRadius.circular(24),
          border: Border.all(color: Colors.grey.shade300),
        ),
        child: Text("₹ $label", style: TextStyle(fontWeight: FontWeight.bold)),
      ),
    );
  }
}
