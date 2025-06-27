import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:ludonew/controller/profile_controller.dart';
import 'package:ludonew/util/constant/contant_color.dart';
import 'package:ludonew/util/constant/images_path.dart';
import 'package:ludonew/widgets/font.dart';

class MyProfile extends StatefulWidget {
  const MyProfile({super.key});

  @override
  State<MyProfile> createState() => _MyProfileState();
}

class _MyProfileState extends State<MyProfile> {
  final ProfileController profileController = Get.put(ProfileController());

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
            "My Profile",
            style: FontConstant.styleSemiBold(
                fontSize: 23, color: AppColors.primaryColor),
          ),
        ),
        body: Obx(() {
          if (profileController.isLoading.value) {
            return Center(child: CircularProgressIndicator());
          } else {
            var user = profileController.member;
            return Padding(
              padding: const EdgeInsets.all(16.0),
              child: Column(
                children: [
                  Container(
                    padding: EdgeInsets.all(15),
                    width: double.infinity,
                    decoration: BoxDecoration(
                        borderRadius: BorderRadius.circular(10),
                        border: Border.all(color: Colors.grey.shade300)),
                    child: Column(
                      children: [
                        Stack(children: [
                          Container(
                            padding: EdgeInsets.all(15),
                            decoration: BoxDecoration(
                                shape: BoxShape.circle,
                                border:
                                    Border.all(color: Colors.grey.shade300)),
                            child: Icon(
                              Icons.person,
                              color: AppColors.secondaryColor,
                              size: 40,
                            ),
                          ),
                          Positioned(
                              right: 0,
                              top: 0,
                              child: Container(
                                  padding: EdgeInsets.all(3),
                                  decoration: BoxDecoration(
                                      shape: BoxShape.circle,
                                      color: AppColors.secondaryColor),
                                  child: Icon(
                                    Icons.edit,
                                    color: AppColors.white,
                                    size: 20,
                                  ))),
                        ]),
                        SizedBox(
                          height: 15,
                        ),
                        Text(
                          "${user?.mobileNo!.substring(0, 5)}xxxx${user?.mobileNo!.substring(9)}",
                          style: FontConstant.styleMedium(
                            fontSize: 17,
                            color: AppColors.black,
                          ),
                        ),
                        SizedBox(
                          height: 5,
                        ),
                        Text(
                          "Phone: ${user?.mobileNo}",
                          style: FontConstant.styleRegular(
                              fontSize: 15, color: AppColors.darkgrey),
                        ),
                        SizedBox(
                          height: 10,
                        ),
                        Divider(),
                        SizedBox(
                          height: 10,
                        ),
                        Row(
                          mainAxisAlignment: MainAxisAlignment.spaceBetween,
                          children: [
                            Expanded(
                              child: Column(
                                children: [
                                  Text("Total Games",
                                      style: FontConstant.styleRegular(
                                          fontSize: 15,
                                          color: AppColors.darkgrey)),
                                  Text("Played",
                                      style: FontConstant.styleRegular(
                                          fontSize: 15,
                                          color: AppColors.darkgrey)),
                                  Text(
                                    "1",
                                    style: FontConstant.styleSemiBold(
                                        fontSize: 17, color: AppColors.black),
                                  )
                                ],
                              ),
                            ),
                            Expanded(
                              child: Column(
                                children: [
                                  Text("Total Games",
                                      style: FontConstant.styleRegular(
                                          fontSize: 15,
                                          color: AppColors.darkgrey)),
                                  Text("Win",
                                      style: FontConstant.styleRegular(
                                          fontSize: 15,
                                          color: AppColors.darkgrey)),
                                  Text(
                                    "1",
                                    style: FontConstant.styleSemiBold(
                                        fontSize: 17, color: AppColors.black),
                                  )
                                ],
                              ),
                            )
                          ],
                        )
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
                    child: Column(
                      children: [
                        Align(
                            alignment: Alignment.centerLeft,
                            child: Text(
                              "Game Status",
                              style: FontConstant.styleMedium(
                                  fontSize: 17, color: AppColors.black),
                            )),
                        SizedBox(
                          height: 20,
                        ),
                        Row(
                          children: [
                            Image.asset(
                              ImagePath.gameStatus,
                              width: 50,
                            ),
                            SizedBox(
                              width: 10,
                            ),
                            Expanded(
                              child: Column(
                                crossAxisAlignment: CrossAxisAlignment.start,
                                children: [
                                  Text(
                                    "Ludo Supreme",
                                    style: FontConstant.styleMedium(
                                        fontSize: 15, color: AppColors.black),
                                  ),
                                  Text(
                                    "Total Games Played: 1",
                                    style: FontConstant.styleMedium(
                                        fontSize: 15,
                                        color: AppColors.darkgrey),
                                  )
                                ],
                              ),
                            )
                          ],
                        )
                      ],
                    ),
                  )
                ],
              ),
            );
          }
        }));
  }
}
