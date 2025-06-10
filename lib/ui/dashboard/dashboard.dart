import 'package:flutter/material.dart';
import 'package:ludonew/ui/dashboard/account/account.dart';
import 'package:ludonew/ui/dashboard/home/home.dart';
import 'package:ludonew/util/constant/contant_color.dart';
import 'package:ludonew/widgets/exit.dart';
import 'package:ludonew/widgets/font.dart';

class Dashboard extends StatefulWidget {
  const Dashboard({super.key});

  @override
  State<Dashboard> createState() => _DashboardState();
}

class _DashboardState extends State<Dashboard> {
  int _selectedIndex = 0;
  // final GlobalKey<ScaffoldState> _scaffoldKey = GlobalKey<ScaffoldState>();
  // List of pages to navigate between
  final List<Widget> _pages = [Home(), Account()];

  void _onItemTapped(int index) {
    // Navigate to other pages
    setState(() {
      _selectedIndex = index;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      // key: _scaffoldKey,
      backgroundColor: AppColors.white,

      body: WillPopScope(
        onWillPop: () async {
          bool shouldExit =
              await DialogConstant.showExitConfirmationDialog(context);
          return shouldExit;
        },
        child: _pages[_selectedIndex],
      ),
      //  _pages[_selectedIndex], // Display selected page
      bottomNavigationBar: BottomNavigationBar(
        backgroundColor: AppColors.white,
        elevation: 4,
        currentIndex: _selectedIndex,
        type: BottomNavigationBarType.fixed,
        selectedLabelStyle:
            FontConstant.styleMedium(fontSize: 13, color: AppColors.black),
        unselectedLabelStyle:
            FontConstant.styleMedium(fontSize: 12, color: AppColors.black),
        selectedItemColor: AppColors.secondaryColor,
        unselectedItemColor: AppColors.secondaryColor,
        onTap: _onItemTapped, // Handle navigation
        items: <BottomNavigationBarItem>[
          BottomNavigationBarItem(
            icon: Icon(Icons.home_outlined), // hollow when unselected
            activeIcon: Icon(Icons.home),
            label: 'Home',
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.person_outline), // hollow when unselected
            activeIcon: Icon(Icons.person),
            label: 'Account',
          ),
        ],
      ),
      // drawer: CustomDrawer(scaffoldKey: _scaffoldKey),
    );
  }
}
