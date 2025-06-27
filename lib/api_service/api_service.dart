import 'dart:convert';
import 'package:ludonew/api_service/api_constant.dart';
import 'package:ludonew/model/add_wallet_model.dart';
import 'package:ludonew/model/check_balance_model.dart';
import 'package:ludonew/model/profile_modal.dart';
import 'package:ludonew/model/send_otp_model.dart';
import 'package:http/http.dart' as http;
import 'package:ludonew/model/subscription_model.dart';
import 'package:ludonew/model/transaction_history_model.dart';
import 'package:ludonew/model/verify_otp_model.dart';
import 'package:shared_preferences/shared_preferences.dart';

class ApiService {
// Start send otp api ===============================================================================>
  Future<SendOtpModel> sendOtp(String mobileNo) async {
    final response = await http.post(
      Uri.parse('${ApiConstants.baseUrl}${ApiConstants.login}'),
      headers: {'Content-Type': 'application/json'},
      body: jsonEncode({
        'mobile_no': mobileNo,
      }),
    );

    if (response.statusCode == 200) {
      final responseJson = json.decode(response.body);
      print(responseJson);
      return SendOtpModel.fromJson(responseJson);
    } else {
      final responseJson = json.decode(response.body);
      print(responseJson);
      throw Exception('Failed: ${responseJson['message']}');
    }
  }
// End send otp api ===================================================================================>

// Start verify otp api ===============================================================================>
  Future<VerifyOtpModel> verifyOtp(String mobileNo, String otp) async {
    print("phone no ${mobileNo} otp ${otp}");

    final response = await http.post(
      Uri.parse('${ApiConstants.baseUrl}${ApiConstants.login}'),
      headers: {'Content-Type': 'application/json'},
      body: jsonEncode({'mobile_no': mobileNo, "otp": otp}),
    );

    if (response.statusCode == 200) {
      final responseJson = json.decode(response.body);
      print(responseJson);
      return VerifyOtpModel.fromJson(responseJson);
    } else {
      final responseJson = json.decode(response.body);
      print(responseJson);
      throw Exception('Failed: ${responseJson['message']}');
    }
  }
// End verify otp api ===================================================================================>

// Start get profile ===============================================================================>
  Future<ProfileModel> profile() async {
    final prefs = await SharedPreferences.getInstance();
    final token = prefs.getString('token');
    print("token ${token}");
    final response = await http.post(
      Uri.parse('${ApiConstants.baseUrl}${ApiConstants.userprofile}'),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer $token'
      },
    );

    if (response.statusCode == 200) {
      final responseJson = json.decode(response.body);
      print(responseJson);
      return ProfileModel.fromJson(responseJson);
    } else {
      final responseJson = json.decode(response.body);
      print(responseJson);
      throw Exception('Failed: ${responseJson['message']}');
    }
  }
// End get profile api ===================================================================================>

// Start get subscription ===============================================================================>
  Future<SubscriptionModel> getSubs() async {
    final prefs = await SharedPreferences.getInstance();
    final token = prefs.getString('token');
    final response = await http.post(
      Uri.parse('${ApiConstants.baseUrl}${ApiConstants.subscription}'),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer $token'
      },
    );

    if (response.statusCode == 200) {
      final responseJson = json.decode(response.body);
      print(responseJson);
      return SubscriptionModel.fromJson(responseJson);
    } else {
      final responseJson = json.decode(response.body);
      print(responseJson);
      throw Exception('Failed: ${responseJson['message']}');
    }
  }
// End get subscription api ===================================================================================>

// Start check balance ===============================================================================>
  Future<CheckBalanceModel> checkBalance(String tournamentId) async {
    final prefs = await SharedPreferences.getInstance();
    final token = prefs.getString('token');
    final response = await http.post(
      Uri.parse('${ApiConstants.baseUrl}${ApiConstants.checkBalanceUrl}'),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer $token'
      },
      body: jsonEncode({
        'tournament_id': tournamentId,
      }),
    );

    if (response.statusCode == 200) {
      final responseJson = json.decode(response.body);
      print(responseJson);
      return CheckBalanceModel.fromJson(responseJson);
    } else {
      final responseJson = json.decode(response.body);
      print(responseJson);
      throw Exception('Failed: ${responseJson['message']}');
    }
  }
// End check balance api ===================================================================================>

// Start transaction history api ===============================================================================>
  Future<TransactionHistoryModel> transactionHistory() async {
    final prefs = await SharedPreferences.getInstance();
    final token = prefs.getString('token');
    final response = await http.get(
      Uri.parse('${ApiConstants.baseUrl}${ApiConstants.transactionHistoryUrl}'),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer $token'
      },
    );

    if (response.statusCode == 200) {
      final responseJson = json.decode(response.body);
      print(responseJson);
      return TransactionHistoryModel.fromJson(responseJson);
    } else {
      final responseJson = json.decode(response.body);
      print(responseJson);
      throw Exception('Failed: ${responseJson['message']}');
    }
  }
// End transaction history api ===================================================================================>

// Start add wallet api ===============================================================================>
  Future<AddWalletModel> addWallet(String amount) async {
    final prefs = await SharedPreferences.getInstance();
    final token = prefs.getString('token');
    final response = await http.post(
      Uri.parse('${ApiConstants.baseUrl}${ApiConstants.addWalletUrl}'),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer $token'
      },
      body: jsonEncode({
        'amount': amount,
      }),
    );

    if (response.statusCode == 200) {
      final responseJson = json.decode(response.body);
      print(responseJson);
      return AddWalletModel.fromJson(responseJson);
    } else {
      final responseJson = json.decode(response.body);
      print(responseJson);
      throw Exception('Failed: ${responseJson['message']}');
    }
  }
// End add wallet  api ===================================================================================>
}
