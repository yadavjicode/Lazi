import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';
import 'package:get/get.dart';
import 'package:ludonew/controller/profile_controller.dart';
import 'package:ludonew/routes/routes.dart';
import 'package:ludonew/util/constant/contant_color.dart';
import 'package:ludonew/util/constant/icons_path.dart';
import 'package:ludonew/widgets/font.dart';
import 'package:ludonew/widgets/logOut.dart';

// ignore: must_be_immutable
class Account extends StatefulWidget {
  Account({super.key});

  @override
  State<Account> createState() => _AccountState();
}

class _AccountState extends State<Account> {
  final ProfileController profileController = Get.put(ProfileController());

  @override
  void initState() {
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        backgroundColor: AppColors.white,
        body: Obx(() {
          return Stack(children: [
            SafeArea(
              child: Column(
                children: [
                  SizedBox(
                    height: 20,
                  ),
                  GestureDetector(
                    onTap: () {
                      Get.toNamed(Routes.myProfile);
                    },
                    child: Row(
                      children: [
                        const SizedBox(
                          width: 10,
                        ),
                        Container(
                          padding: EdgeInsets.all(10),
                          decoration: BoxDecoration(
                              shape: BoxShape.circle,
                              border: Border.all(color: Colors.grey.shade300)),
                          child: Icon(
                            Icons.person,
                            color: AppColors.secondaryColor,
                            size: 40,
                          ),
                        ),
                        const SizedBox(
                          width: 5,
                        ),
                        Expanded(
                          child: Column(
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: [
                              Text(
                                "${profileController.member?.mobileNo ?? ""}",
                                style: FontConstant.styleMedium(
                                    fontSize: 16, color: AppColors.black),
                              ),

                              Text(
                                "SEE PROFILE >",
                                style: FontConstant.styleRegular(
                                    fontSize: 14,
                                    color: AppColors.secondaryColor),
                              ),
                              // Text(
                              //   "Member since Nov 2024",
                              //   style: FontConstant.styleRegular(
                              //       fontSize: 14, color: AppColor.whiteColor),
                              // )
                            ],
                          ),
                        ),
                      ],
                    ),
                  ),
                  SizedBox(
                    height: 20,
                  ),
                  Divider(
                    color: Colors.grey.shade300,
                  ),
                  // ——— LANGUAGE TOGGLE ——————————
                  // Align(
                  //   alignment: Alignment.centerLeft,
                  //   child: Padding(
                  //     padding:
                  //         const EdgeInsets.symmetric(horizontal: 16, vertical: 10),
                  //     child: Column(
                  //       crossAxisAlignment: CrossAxisAlignment.start,
                  //       children: [
                  //         Text(
                  //           "Choose Language",
                  //           style: FontConstant.styleMedium(
                  //               fontSize: 15, color: AppColors.black),
                  //         ),
                  //         SizedBox(height: 10),
                  //         LanguageToggleRow(
                  //           initial: 'English',
                  //           onChanged: (lang) {
                  //             // TODO: actually switch your locale or save it
                  //             print('Language switched to $lang');
                  //           },
                  //         ),
                  //       ],
                  //     ),
                  //   ),
                  // ),
                  Divider(
                    color: Colors.grey.shade300,
                  ),
                  Expanded(
                    child: ListView(
                      // physics: NeverScrollableScrollPhysics(),
                      padding: EdgeInsets.zero,
                      children: <Widget>[
                        GestureDetector(
                          onTap: () {
                            Get.toNamed(Routes.myBalance);
                          },
                          child: buildoption(
                              icons: IconsPath.walletB,
                              tittle: "Wallet Balance",
                              subtile:
                                  "₹ ${profileController.member?.wallet ?? 0}",
                              forward: true),
                        ),

                        GestureDetector(
                          // onTap: () => {Get.to(RatingDemo())},
                          child: buildoption(
                              icons: IconsPath.help,
                              tittle: "Help",
                              subtile: "Customer Support",
                              forward: true),
                        ),
                        GestureDetector(
                          onTap: () => {},
                          child: buildoption(
                              icons: IconsPath.about,
                              tittle: "About",
                              forward: true),
                        ),

                        // ),
                        GestureDetector(
                          onTap: () => {Get.toNamed(Routes.privacyPolicy)},
                          child: buildoptionIcon(
                              icons: Icon(
                                Icons.privacy_tip,
                                color: AppColors.primaryColor,
                              ),
                              tittle: "Privacy Policy",
                              forward: false),
                        ),
                        GestureDetector(
                          onTap: () => {Get.toNamed(Routes.termsAndConditions)},
                          child: buildoptionIcon(
                              icons: Icon(
                                Icons.rule,
                                color: AppColors.primaryColor,
                              ),
                              tittle: "Terms And Conditions",
                              forward: false),
                        ),
                        GestureDetector(
                          onTap: () => {Get.toNamed(Routes.faqs)},
                          child: buildoption(
                              icons: IconsPath.faq,
                              tittle: "FAQs",
                              forward: false),
                        ),

                        GestureDetector(
                          onTap: () => {showLogoutConfirmationDialog(context)},
                          child: buildoption(
                              icons: IconsPath.logout,
                              tittle: "Logout",
                              forward: false),
                        ),

                        const SizedBox(
                          height: 50,
                        )
                      ],
                    ),
                  ),
                ],
              ),
            ),
            if (profileController.isLoading.value)
              Center(
                child: CircularProgressIndicator(
                  color: AppColors.primaryColor,
                ),
              )
          ]);
        }));
  }
}

Widget buildoption(
    {required String icons,
    required String tittle,
    String? subtile,
    required bool forward}) {
  return Container(
    color: AppColors.white,
    child: Column(
      children: [
        Padding(
          padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 10),
          child: Row(
            children: [
              SvgPicture.asset(
                icons,
                width: 50,
                height: 50,
              ),
              const SizedBox(
                width: 20,
              ),
              Expanded(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(
                      tittle,
                      style: FontConstant.styleMedium(
                          fontSize: 15, color: AppColors.black),
                    ),
                    if (subtile != null)
                      Text(
                        subtile,
                        style: FontConstant.styleRegular(
                            fontSize: 13, color: AppColors.darkgrey),
                      )
                  ],
                ),
              ),
              if (forward)
                Icon(
                  Icons.arrow_forward_ios_outlined,
                  color: AppColors.grey,
                  size: 15,
                )
            ],
          ),
        ),
        Divider(
          color: Colors.grey.shade300,
        )
      ],
    ),
  );
}

Widget buildoptionIcon(
    {required Icon icons,
    required String tittle,
    String? subtile,
    required bool forward}) {
  return Container(
    color: AppColors.white,
    child: Column(
      children: [
        Padding(
          padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 10),
          child: Row(
            children: [
              Container(
                  padding: EdgeInsets.all(13),
                  decoration: BoxDecoration(
                      color: AppColors.secondaryColor.withOpacity(0.1),
                      shape: BoxShape.circle),
                  child: icons),
              const SizedBox(
                width: 20,
              ),
              Expanded(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(
                      tittle,
                      style: FontConstant.styleMedium(
                          fontSize: 15, color: AppColors.black),
                    ),
                    if (subtile != null)
                      Text(
                        subtile,
                        style: FontConstant.styleRegular(
                            fontSize: 13, color: AppColors.darkgrey),
                      )
                  ],
                ),
              ),
              if (forward)
                Icon(
                  Icons.arrow_forward_ios_outlined,
                  color: AppColors.grey,
                  size: 15,
                )
            ],
          ),
        ),
        Divider(
          color: Colors.grey.shade300,
        )
      ],
    ),
  );
}

Widget expansionOption(String tittle) {
  return Container(
    color: AppColors.white,
    width: double.infinity,
    alignment: Alignment.centerLeft,
    padding: const EdgeInsets.only(left: 60, top: 15, bottom: 6, right: 18),
    child: Text(
      tittle,
      style: FontConstant.styleMedium(fontSize: 17, color: AppColors.black),
    ),
  );
}

class LanguageToggleRow extends StatefulWidget {
  final void Function(String) onChanged;
  final String initial;
  const LanguageToggleRow({
    Key? key,
    required this.onChanged,
    this.initial = 'English',
  }) : super(key: key);

  @override
  _LanguageToggleRowState createState() => _LanguageToggleRowState();
}

class _LanguageToggleRowState extends State<LanguageToggleRow> {
  late String selected;
  static const activeColor = Color(0xFFD32F2F);
  static const inactiveColor = Color(0xFFFFCDD2);

  @override
  void initState() {
    super.initState();
    selected = widget.initial;
  }

  void _pick(String lang) {
    setState(() => selected = lang);
    widget.onChanged(lang);
  }

  @override
  Widget build(BuildContext context) {
    return Row(
      mainAxisSize: MainAxisSize.min,
      children: [
        // English pill
        GestureDetector(
          onTap: () => _pick('English'),
          child: Container(
            padding: EdgeInsets.symmetric(vertical: 8, horizontal: 16),
            decoration: BoxDecoration(
              color: selected == 'English' ? activeColor : inactiveColor,
              borderRadius: BorderRadius.horizontal(
                left: Radius.circular(20),
                right: Radius.circular(0),
              ),
            ),
            child: Text(
              'English',
              style: TextStyle(
                color: selected == 'English' ? Colors.white : activeColor,
                fontWeight: FontWeight.bold,
              ),
            ),
          ),
        ),
        // Hindi pill
        GestureDetector(
          onTap: () => _pick('Hindi'),
          child: Container(
            padding: EdgeInsets.symmetric(vertical: 8, horizontal: 16),
            decoration: BoxDecoration(
              color: selected == 'Hindi' ? activeColor : inactiveColor,
              borderRadius: BorderRadius.horizontal(
                left: Radius.circular(0),
                right: Radius.circular(20),
              ),
            ),
            child: Text(
              'Hindi',
              style: TextStyle(
                color: selected == 'Hindi' ? Colors.white : activeColor,
                fontWeight: FontWeight.bold,
              ),
            ),
          ),
        ),
      ],
    );
  }
}
