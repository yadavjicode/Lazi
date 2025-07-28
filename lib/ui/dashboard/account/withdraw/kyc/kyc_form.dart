import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:get/get_core/src/get_main.dart';
import 'package:ludonew/controller/get_kyc_controller.dart';
import 'package:ludonew/controller/post_kyc_controller.dart';
import 'package:ludonew/util/constant/contant_color.dart';
import 'package:ludonew/widgets/CustomTextFeild.dart';
import 'package:ludonew/widgets/font.dart';

class KYCForm extends StatefulWidget {
  const KYCForm({super.key});

  @override
  State<KYCForm> createState() => _KycFormState();
}

class _KycFormState extends State<KYCForm> {
  final GlobalKey<FormState> _formKey = GlobalKey<FormState>();
  final TextEditingController bankName = TextEditingController();
  final TextEditingController bankAccountNo = TextEditingController();
  final TextEditingController bankIFSCCode = TextEditingController();
  final TextEditingController bankBranch = TextEditingController();
  final TextEditingController bankHolderName = TextEditingController();
  final PostKycController postKycController = Get.put(PostKycController());
  final GetKycController getKycController = Get.put(GetKycController());

  @override
  void initState() {
    super.initState();
    WidgetsBinding.instance.addPostFrameCallback((_) {
      getKycController.getKYC(context).then((_) {
        setState(() {
          bankName.text = getKycController.member?.data?.bankName ?? "";
          bankAccountNo.text =
              getKycController.member?.data?.bankAccountNo ?? "";
          bankIFSCCode.text = getKycController.member?.data?.bankIfcCode ?? "";
          bankBranch.text = getKycController.member?.data?.bankBranch ?? "";
          bankHolderName.text =
              getKycController.member?.data?.bankHolderName ?? "";
        });
      });
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
          "KYC Form",
          style: FontConstant.styleSemiBold(
              fontSize: 23, color: AppColors.primaryColor),
        ),
      ),
      body: Obx(() {
        return Stack(children: [
          Padding(
            padding: const EdgeInsets.symmetric(horizontal: 22, vertical: 16),
            child: Form(
              key: _formKey,
              child: Column(
                children: [
                  Expanded(
                    child: SingleChildScrollView(
                      child: Column(
                        children: [
                          CustomTextField(
                              labelText: "Bank Name",
                              hintText: "Bank Name",
                              controller: bankName,
                              validator: (value) {
                                if (value == null || value.trim().isEmpty) {
                                  return 'Please enter Bank Name';
                                }
                                return null;
                              }),
                          SizedBox(height: 10),
                          CustomTextField(
                              labelText: "Bank Account No",
                              hintText: "Bank Account No",
                              controller: bankAccountNo,
                              keyboardType: TextInputType.number,
                              validator: (value) {
                                if (value == null || value.trim().isEmpty) {
                                  return 'Please enter Bank Account No';
                                }
                                return null;
                              }),
                          SizedBox(height: 10),
                          CustomTextField(
                              labelText: "Bank IFSC Code",
                              hintText: "Bank IFSC Code",
                              controller: bankIFSCCode,
                              validator: (value) {
                                if (value == null || value.trim().isEmpty) {
                                  return 'Please enter Bank IFSC Code';
                                }
                                return null;
                              }),
                          SizedBox(height: 10),
                          CustomTextField(
                              labelText: "Bank Branch",
                              hintText: "Bank Branch",
                              controller: bankBranch,
                              validator: (value) {
                                if (value == null || value.trim().isEmpty) {
                                  return 'Please enter Bank Branch';
                                }
                                return null;
                              }),
                          SizedBox(height: 10),
                          CustomTextField(
                              labelText: "Bank Holder Name",
                              hintText: "Bank Holder Name",
                              controller: bankHolderName,
                              validator: (value) {
                                if (value == null || value.trim().isEmpty) {
                                  return 'Please enter Bank Holder Name';
                                }
                                return null;
                              }),
                        ],
                      ),
                    ),
                  ),
                  SizedBox(
                    width: double.infinity,
                    child: ElevatedButton(
                        onPressed: () {
                          if (_formKey.currentState!.validate()) {
                            postKycController.postKYC(
                                context,
                                bankName.text.toString().trim(),
                                bankAccountNo.text.toString().trim(),
                                bankIFSCCode.text.toString().trim(),
                                bankBranch.text.toString().trim(),
                                bankHolderName.text.toString().trim());
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
                          "SUBMIT",
                          style: FontConstant.styleMedium(
                              fontSize: 17, color: AppColors.white),
                        )),
                  ),
                ],
              ),
            ),
          ),
          if (postKycController.isLoading.value ||
              getKycController.isLoading.value)
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
