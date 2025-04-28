import 'package:flutter/material.dart';
import 'package:flutter_svg/svg.dart';
import 'package:get/get.dart';
import 'package:ludonew/routes/routes.dart';
import 'package:ludonew/util/constant/contant_color.dart';
import 'package:ludonew/util/constant/icons_path.dart';
import 'package:ludonew/util/constant/images_path.dart';
import 'package:ludonew/widgets/font.dart';

class Joined extends StatefulWidget {
  const Joined({super.key});

  @override
  State<Joined> createState() => _Joined();
}

class _Joined extends State<Joined> {
  @override
  Widget build(BuildContext context) {
    final double screenWidth = MediaQuery.of(context).size.width;
    final double screenHeight = MediaQuery.of(context).size.height;
    return Scaffold(
      backgroundColor: AppColors.primaryColor,
      body: SafeArea(
          child: Column(
        children: [
          Stack(children: [
            Image.asset(
              ImagePath.startLudo,
              height: screenHeight * 0.4,
              width: screenWidth * 1,
              fit: BoxFit.cover,
            ),
            Padding(
              padding: const EdgeInsets.all(16.0),
              child: Container(
                child: Row(
                  children: [
                    GestureDetector(
                      onTap: () {
                        Get.toNamed(Routes.startPlay);
                      },
                      child: Icon(
                        Icons.arrow_back,
                        color: AppColors.white,
                      ),
                    ),
                    Spacer(),
                    Container(
                        padding: EdgeInsets.all(7),
                        decoration: BoxDecoration(
                          color: AppColors.white,
                          shape: BoxShape.circle,
                        ),
                        child: SvgPicture.asset(IconsPath.youtube)),
                    SizedBox(
                      width: 10,
                    ),
                    Container(
                      padding:
                          EdgeInsets.symmetric(horizontal: 12, vertical: 5),
                      decoration: BoxDecoration(
                          color: AppColors.white,
                          borderRadius: BorderRadius.circular(10)),
                      child: Row(
                        children: [
                          Text(
                            "₹ 1",
                            style: FontConstant.styleSemiBold(
                                fontSize: 15, color: AppColors.primaryColor),
                          ),
                          SizedBox(
                            width: 10,
                          ),
                          SvgPicture.asset(
                            IconsPath.wallet,
                            color: AppColors.primaryColor,
                          )
                        ],
                      ),
                    )
                  ],
                ),
              ),
            ),
          ]),
          Expanded(
              child: Container(
            decoration: BoxDecoration(
                color: AppColors.white,
                borderRadius: BorderRadius.only(
                    topLeft: Radius.circular(20),
                    topRight: Radius.circular(20))),
            child: SingleChildScrollView(
              child: Padding(
                padding: const EdgeInsets.all(16.0),
                child: Column(
                  children: [
                    SizedBox(height: 10),
                    Image.asset(
                      ImagePath.zada,
                      width: screenWidth * 1,
                    ),
                    SizedBox(height: 20),
                    PromotedContestCard(
                      players: "99+",
                      format: "4 PLAYERS – 2 WINNERS",
                      prizePool: "₹ 5000",
                      entry: "Free",
                    ),
                    SizedBox(height: 24),
                    QuickContestCard(
                      players: "99+",
                      format: "4 PLAYERS – 2 WINNERS",
                      prizePool: "₹ 5000",
                      entry: "Free",
                    ),
                  ],
                ),
              ),
            ),
          ))
        ],
      )),
    );
  }
}

/// 1) PROMOTED CARD
class PromotedContestCard extends StatelessWidget {
  final String players, format, prizePool, entry;
  const PromotedContestCard({
    Key? key,
    required this.players,
    required this.format,
    required this.prizePool,
    required this.entry,
  }) : super(key: key);

  @override
  Widget build(BuildContext ctx) {
    return Stack(
      clipBehavior: Clip.none,
      children: [
        // The card background
        Container(
          decoration: BoxDecoration(
            border: Border.all(color: Colors.grey.shade300),
            gradient: LinearGradient(
              colors: [Colors.white, Color(0xFFFFEBEE)],
              begin: Alignment.topCenter,
              end: Alignment.bottomCenter,
            ),
            borderRadius: BorderRadius.circular(16),
          ),
          child: Column(
            children: [
              // top row: players & format
              Container(
                decoration: BoxDecoration(
                    color: AppColors.secondaryColor,
                    borderRadius: BorderRadius.only(
                        topLeft: Radius.circular(16),
                        topRight: Radius.circular(16))),
                child: Padding(
                  padding: const EdgeInsets.all(10.0),
                  child: Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: [
                      Row(children: [
                        Icon(Icons.people_outline,
                            size: 20, color: AppColors.white),
                        SizedBox(width: 4),
                        Text(players,
                            style: FontConstant.styleRegular(
                                fontSize: 15, color: AppColors.white)),
                      ]),
                      Text(format,
                          style: FontConstant.styleRegular(
                              fontSize: 15, color: AppColors.white)),
                      SizedBox(width: 20), // spacer for ribbon
                    ],
                  ),
                ),
              ),
              SizedBox(height: 16),
              // headings
              Padding(
                padding: const EdgeInsets.all(10.0),
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: [
                    Text("PRIZE POOL",
                        style: FontConstant.styleMedium(
                            fontSize: 18, color: AppColors.secondaryColor)),
                    Text("ENTRY",
                        style: FontConstant.styleMedium(
                            fontSize: 18, color: AppColors.secondaryColor)),
                  ],
                ),
              ),

              // values
              Padding(
                padding: const EdgeInsets.all(10.0),
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: [
                    // prize pill
                    Container(
                      padding:
                          EdgeInsets.symmetric(vertical: 6, horizontal: 12),
                      decoration: BoxDecoration(
                        color: Colors.white,
                        borderRadius: BorderRadius.circular(12),
                      ),
                      child: Text(
                        prizePool,
                        style: FontConstant.styleMedium(
                            fontSize: 18, color: AppColors.secondaryColor),
                      ),
                    ),

                    // entry pill
                    GestureDetector(
                      onTap: () {},
                      child: Container(
                        padding:
                            EdgeInsets.symmetric(vertical: 6, horizontal: 16),
                        decoration: BoxDecoration(
                          border: Border.all(color: AppColors.secondaryColor),
                          borderRadius: BorderRadius.circular(12),
                          color: AppColors.white,
                        ),
                        child: Text(
                          entry,
                          style: FontConstant.styleMedium(
                              fontSize: 18, color: AppColors.secondaryColor),
                        ),
                      ),
                    ),
                  ],
                ),
              ),
            ],
          ),
        ),

        // the "PROMOTED" ribbon
        Positioned(
          top: 0,
          right: 0,
          child: Container(
            width: 100,
            decoration: BoxDecoration(
                color: AppColors.primaryColor,
                borderRadius: BorderRadius.circular(10)),
            padding: EdgeInsets.symmetric(vertical: 4),
            child: Center(
              child: Text(
                "PROMOTED",
                style: FontConstant.styleRegular(
                    fontSize: 13, color: AppColors.white),
              ),
            ),
          ),
        ),
      ],
    );
  }
}

/// 1) PROMOTED CARD
class QuickContestCard extends StatelessWidget {
  final String players, format, prizePool, entry;
  const QuickContestCard({
    Key? key,
    required this.players,
    required this.format,
    required this.prizePool,
    required this.entry,
  }) : super(key: key);

  @override
  Widget build(BuildContext ctx) {
    return
        // The card background
        Container(
      decoration: BoxDecoration(
        border: Border.all(color: Colors.grey.shade300),
        color: AppColors.white,
        borderRadius: BorderRadius.circular(16),
      ),
      child: Column(
        children: [
          // top row: players & format
          Container(
            decoration: BoxDecoration(
                color: Colors.grey.shade400,
                borderRadius: BorderRadius.only(
                    topLeft: Radius.circular(16),
                    topRight: Radius.circular(16))),
            child: Padding(
              padding: const EdgeInsets.all(10.0),
              child: Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  Row(children: [
                    Icon(Icons.people_outline,
                        size: 20, color: AppColors.black),
                    SizedBox(width: 4),
                    Text(players,
                        style: FontConstant.styleRegular(
                            fontSize: 13, color: AppColors.black)),
                  ]),
                  Text(format,
                      style: FontConstant.styleRegular(
                          fontSize: 13, color: AppColors.black)),
                  Row(
                    children: [
                      Icon(Icons.timer_outlined),
                      Text("QUICK",
                          style: FontConstant.styleRegular(
                              fontSize: 13, color: AppColors.black)),
                    ],
                  ),
                ],
              ),
            ),
          ),
          SizedBox(height: 16),
          // headings
          Padding(
            padding: const EdgeInsets.all(10.0),
            child: Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                Text("PRIZE POOL",
                    style: FontConstant.styleMedium(
                        fontSize: 18, color: AppColors.darkgrey)),
                Text("ENTRY",
                    style: FontConstant.styleMedium(
                        fontSize: 18, color: AppColors.darkgrey)),
              ],
            ),
          ),

          // values
          Padding(
            padding: const EdgeInsets.all(10.0),
            child: Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                // prize pill
                Container(
                  padding: EdgeInsets.symmetric(vertical: 6, horizontal: 12),
                  decoration: BoxDecoration(
                    color: Colors.grey.shade400,
                    borderRadius: BorderRadius.circular(12),
                  ),
                  child: Text(
                    prizePool,
                    style: FontConstant.styleMedium(
                        fontSize: 18, color: AppColors.black),
                  ),
                ),
                Container(
                  padding: EdgeInsets.symmetric(vertical: 6, horizontal: 16),
                  decoration: BoxDecoration(
                    border: Border.all(color: Colors.grey.shade400),
                    borderRadius: BorderRadius.circular(12),
                    color: Colors.grey.shade400,
                  ),
                  child: Row(
                    children: [
                      Icon(
                        Icons.timer_outlined,
                        color: AppColors.secondaryColor,
                      ),
                      Text(
                        " 00m 02s",
                        style: FontConstant.styleRegular(
                            fontSize: 13, color: AppColors.secondaryColor),
                      ),
                    ],
                  ),
                ),

                // entry pill
                GestureDetector(
                  onTap: () {
                    Get.toNamed(Routes.loadingScreen);
                  },
                  child: Container(
                    padding: EdgeInsets.symmetric(vertical: 6, horizontal: 16),
                    decoration: BoxDecoration(
                      border: Border.all(color: AppColors.secondaryColor),
                      borderRadius: BorderRadius.circular(12),
                      color: AppColors.secondaryColor,
                    ),
                    child: Text(
                      "joined",
                      style: FontConstant.styleMedium(
                          fontSize: 18, color: AppColors.white),
                    ),
                  ),
                ),
              ],
            ),
          ),
          Text(
            "EARN WINNINGS",
            style: FontConstant.styleMedium(
                fontSize: 15, color: AppColors.darkgrey),
          ),
          SizedBox(
            height: 10,
          )
        ],
      ),
    );
  }
}


// /// 2) QUICK CARD
// class QuickContestCard extends StatelessWidget {
//   final String players, format, prizePool, entry, countdown;
//   const QuickContestCard({
//     Key? key,
//     required this.players,
//     required this.format,
//     required this.prizePool,
//     required this.entry,
//     required this.countdown,
//   }) : super(key: key);

//   @override
//   Widget build(BuildContext ctx) {
//     return Container(
//       decoration: BoxDecoration(
//         color: Colors.white,
//         border: Border.all(color: Colors.grey.shade300),
//         borderRadius: BorderRadius.circular(16),
//       ),
//       padding: const EdgeInsets.symmetric(vertical: 16, horizontal: 16),
//       child: Column(
//         children: [
//           // top row: players, format, quick icon
//           Row(
//             mainAxisAlignment: MainAxisAlignment.spaceBetween,
//             children: [
//               Row(children: [
//                 Icon(Icons.people_outline, size: 20, color: Colors.grey[800]),
//                 SizedBox(width: 4),
//                 Text(players, style: TextStyle(fontWeight: FontWeight.bold)),
//               ]),
//               Text(format, style: TextStyle(fontWeight: FontWeight.bold)),
//               Row(children: [
//                 Icon(Icons.schedule, size: 20, color: Colors.grey[800]),
//                 SizedBox(width: 4),
//                 Text("QUICK", style: TextStyle(fontWeight: FontWeight.bold)),
//               ]),
//             ],
//           ),
//           SizedBox(height: 16),

//           // prize, timer, entry row
//           Row(
//             mainAxisAlignment: MainAxisAlignment.spaceBetween,
//             children: [
//               // prize pill
//               Container(
//                 padding: EdgeInsets.symmetric(vertical: 6, horizontal: 12),
//                 decoration: BoxDecoration(
//                   color: Color(0xFFF0F3FF),
//                   borderRadius: BorderRadius.circular(12),
//                 ),
//                 child: Text(
//                   prizePool,
//                   style: TextStyle(fontWeight: FontWeight.bold),
//                 ),
//               ),

//               // countdown
//               Container(
//                 padding: EdgeInsets.symmetric(vertical: 6, horizontal: 12),
//                 decoration: BoxDecoration(
//                   color: Colors.red.withOpacity(0.1),
//                   borderRadius: BorderRadius.circular(12),
//                 ),
//                 child: Text(
//                   countdown,
//                   style:
//                       TextStyle(color: Colors.red, fontWeight: FontWeight.bold),
//                 ),
//               ),

//               // entry pill
//               Container(
//                 padding: EdgeInsets.symmetric(vertical: 6, horizontal: 16),
//                 decoration: BoxDecoration(
//                   color: Colors.green,
//                   borderRadius: BorderRadius.circular(12),
//                 ),
//                 child: Text(
//                   entry,
//                   style: TextStyle(
//                       color: Colors.white, fontWeight: FontWeight.bold),
//                 ),
//               ),
//             ],
//           ),
//           SizedBox(height: 12),
//           Text("EARN WINNINGS", style: TextStyle(color: Colors.grey[600])),
//         ],
//       ),
//     );
//   }
// }
