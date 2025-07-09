import 'package:flutter/material.dart';
import 'package:ludonew/util/constant/contant_color.dart';
import 'package:ludonew/widgets/font.dart';
import 'package:url_launcher/url_launcher.dart';

class Help extends StatefulWidget {
  const Help({super.key});

  @override
  State<Help> createState() => _HelpState();
}

class _HelpState extends State<Help> {
  final String supportEmail = 'support@example.com';

  final String supportPhone = '+91 9876543210';

  Future<void> _launchEmail(String email) async {
    final Uri emailUri = Uri(
      scheme: 'mailto',
      path: email,
    );
    if (await canLaunchUrl(emailUri)) {
      await launchUrl(emailUri);
    } else {
      debugPrint('Could not launch email');
    }
  }

  Future<void> _launchPhone(String phone) async {
    final Uri phoneUri = Uri(
      scheme: 'tel',
      path: phone,
    );
    if (await canLaunchUrl(phoneUri)) {
      await launchUrl(phoneUri);
    } else {
      debugPrint('Could not launch phone');
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: AppColors.primaryColor,
        iconTheme: IconThemeData(
          color: AppColors.white,
        ),
        elevation: 0,
        title: Text(
          "Help",
          style: FontConstant.styleMedium(fontSize: 20, color: AppColors.white),
        ),
      ),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(
              "We're here to help you!",
              style: FontConstant.styleMedium(
                  fontSize: 18, color: AppColors.black),
            ),
            const SizedBox(height: 16),
            Card(
              elevation: 2,
              child: ListTile(
                leading: const Icon(
                  Icons.email,
                  color: AppColors.primaryColor,
                ),
                title: Text(
                  supportEmail,
                  style: FontConstant.styleRegular(
                      fontSize: 15, color: AppColors.black),
                ),
                subtitle: Text(
                  "Email us",
                  style: FontConstant.styleRegular(
                      fontSize: 13, color: AppColors.darkgrey),
                ),
                onTap: () => _launchEmail(supportEmail),
              ),
            ),
            const SizedBox(height: 12),
            Card(
              elevation: 2,
              child: ListTile(
                leading: const Icon(
                  Icons.phone,
                  color: AppColors.primaryColor,
                ),
                title: Text(
                  supportPhone,
                  style: FontConstant.styleRegular(
                      fontSize: 15, color: AppColors.black),
                ),
                subtitle: Text("Call us",
                    style: FontConstant.styleRegular(
                        fontSize: 13, color: AppColors.darkgrey)),
                onTap: () => _launchPhone(supportPhone),
              ),
            ),
            const SizedBox(height: 30),
            Text("Other Queries",
                style: FontConstant.styleMedium(
                    fontSize: 15, color: AppColors.black)),
            const SizedBox(height: 8),
            Text(
                "For app-related issues, account support, or complaints, you can reach out via email or call. We respond within 24 hours.",
                style: FontConstant.styleRegular(
                    fontSize: 13, color: AppColors.darkgrey)),
          ],
        ),
      ),
    );
  }
}
