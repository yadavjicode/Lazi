import 'dart:convert';
import 'dart:io';
import 'package:ludonew/api_service/api_constant.dart';
import 'package:ludonew/model/add_wallet_model.dart';
import 'package:ludonew/model/ads_model.dart';
import 'package:ludonew/model/check_balance_model.dart';
import 'package:ludonew/model/create_game_model.dart';
import 'package:ludonew/model/daily_game_list_model.dart';
import 'package:ludonew/model/daily_win_model.dart';
import 'package:ludonew/model/dashboard_banner_model.dart';
import 'package:ludonew/model/edit_profile_model.dart';
import 'package:ludonew/model/get_kyc_model.dart';
import 'package:ludonew/model/kyc_post_model.dart';
import 'package:ludonew/model/offline_start_model.dart';
import 'package:ludonew/model/plateform_fee_model.dart';
import 'package:ludonew/model/profile_modal.dart';
import 'package:ludonew/model/send_otp_model.dart';
import 'package:http/http.dart' as http;
import 'package:ludonew/model/subscription_model.dart';
import 'package:ludonew/model/transaction_history_model.dart';
import 'package:ludonew/model/verify_otp_model.dart';
import 'package:ludonew/model/weekly_game_list_model.dart';
import 'package:ludonew/model/weekly_schedule_game_model.dart';
import 'package:ludonew/model/weekly_win_model.dart';
import 'package:ludonew/model/winner_count_model.dart';
import 'package:ludonew/model/withdraw_history_model.dart';
import 'package:ludonew/model/withdraw_request_model.dart';
import 'package:shared_preferences/shared_preferences.dart';
import "package:http_parser/src/media_type.dart";

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
  Future<CheckBalanceModel> checkBalance(
      String tournamentId, String type) async {
    final prefs = await SharedPreferences.getInstance();
    final token = prefs.getString('token');
    final response = await http.post(
      Uri.parse('${ApiConstants.baseUrl}${ApiConstants.checkBalanceUrl}'),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer $token'
      },
      body: jsonEncode({'tournament_id': tournamentId, 'check_type': type}),
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
  Future<AddWalletModel> addWallet(
      String amount, String transactionId, String paymentStatus) async {
    final prefs = await SharedPreferences.getInstance();
    final token = prefs.getString('token');
    print(
        "amount. ${amount}. transactionId. ${transactionId}. paymentStatus. ${paymentStatus}.");
    final response = await http.post(
      Uri.parse('${ApiConstants.baseUrl}${ApiConstants.addWalletUrl}'),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer $token'
      },
      body: jsonEncode({
        'amount': amount,
        "transaction_id": transactionId,
        "payment_status": paymentStatus,
        // "order_id": orderId
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

// Start dashboard Banner api ===============================================================================>

  Future<DashboardBannerModel> dashboardBanner() async {
    final prefs = await SharedPreferences.getInstance();
    final token = prefs.getString('token');

    final response = await http.post(
      Uri.parse('${ApiConstants.baseUrl}${ApiConstants.dashboardBannerUrl}'),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer $token'
      },
    );

    if (response.statusCode == 200) {
      final responseJson = json.decode(response.body);
      print(responseJson);
      return DashboardBannerModel.fromJson(responseJson);
    } else {
      final responseJson = json.decode(response.body);
      print(responseJson);
      throw Exception('Failed: ${responseJson['message']}');
    }
  }
// End dashboard Banner  api ===================================================================================>

// Start edit profile api ===============================================================================>

  Future<EditProfileModel> editProfile(
      String name, String dob, String gender, File? profileImage) async {
    final prefs = await SharedPreferences.getInstance();
    final token = prefs.getString('token');

    if (token == null || token.isEmpty) {
      throw Exception('Authorization token is missing.');
    }

    // Prepare form data for multipart request
    var request = http.MultipartRequest(
      'POST',
      Uri.parse('${ApiConstants.baseUrl}${ApiConstants.editProfileUrl}'),
    );

    // Add headers
    request.headers.addAll({
      'Content-Type': 'application/json', // Content-Type for the whole request
      'Authorization':
          'Bearer $token', // Replace with the actual token if needed
    });

    // Add the image file
    if (profileImage != null) {
      request.files.add(await http.MultipartFile.fromPath(
        'profile_image',
        profileImage.path,
        contentType:
            MediaType('image', 'jpeg'), // Or 'png' depending on the image type
      ));
    }

    request.fields['name'] = name;
    request.fields['date_of_birth'] = dob;
    request.fields['gender'] = gender;

    try {
      // Send the request
      final response = await request.send();

      // If the server responds with status code 200 (OK)
      if (response.statusCode == 200) {
        // Parse the response body
        final responseBody = await response.stream.bytesToString();
        final responseJson = json.decode(responseBody);
        print(responseJson);

        // Return the parsed response as ProfileInfoAgentModel
        return EditProfileModel.fromJson(responseJson);
      } else {
        // If something goes wrong, throw an exception
        final responseBody = await response.stream.bytesToString();
        final responseJson = json.decode(responseBody);
        throw Exception('Failed: ${responseJson['message']}');
      }
    } catch (e) {
      throw Exception('Error: $e');
    }
  }
// End edit profile  api ===================================================================================>

// Start ads api ===============================================================================>
  Future<AdsModel> ads() async {
    final prefs = await SharedPreferences.getInstance();
    final token = prefs.getString('token');

    final response = await http.get(
      Uri.parse('${ApiConstants.baseUrl}${ApiConstants.adsUrl}'),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer $token'
      },
    );

    if (response.statusCode == 200) {
      final responseJson = json.decode(response.body);
      print(responseJson);
      return AdsModel.fromJson(responseJson);
    } else {
      final responseJson = json.decode(response.body);
      print(responseJson);
      throw Exception('Failed: ${responseJson['message']}');
    }
  }
// End ads api ===================================================================================>

// Start daily game list url api ===============================================================================>
  Future<DailyGameListModel> dailyGameList(String tournamentId) async {
    final prefs = await SharedPreferences.getInstance();
    final token = prefs.getString('token');

    final response = await http.post(
      Uri.parse('${ApiConstants.baseUrl}${ApiConstants.dailyGameListUrl}'),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer $token'
      },
      body: jsonEncode({"daily_tournament_id": tournamentId}),
    );

    if (response.statusCode == 200) {
      final responseJson = json.decode(response.body);
      print(responseJson);
      return DailyGameListModel.fromJson(responseJson);
    } else {
      final responseJson = json.decode(response.body);
      print(responseJson);
      throw Exception('Failed: ${responseJson['message']}');
    }
  }
// End daily game list url api ===================================================================================>

// Start game list url api ===============================================================================>
  Future<WeeklyScheduleGameModel> weeklySchedule(
      String tournamentId, String tournmentRound, String entryFee) async {
    final prefs = await SharedPreferences.getInstance();
    final token = prefs.getString('token');

    final response = await http.post(
      Uri.parse('${ApiConstants.baseUrl}${ApiConstants.weeklyScheduleUrl}'),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer $token'
      },
      body: jsonEncode({
        "weekly_tournament_id": tournamentId,
        "tournament_round": tournmentRound,
        "entry_fee": entryFee
      }),
    );

    if (response.statusCode == 200) {
      final responseJson = json.decode(response.body);
      print(responseJson);
      return WeeklyScheduleGameModel.fromJson(responseJson);
    } else {
      final responseJson = json.decode(response.body);
      print(responseJson);
      throw Exception('Failed: ${responseJson['message']}');
    }
  }
// End game list url api ===================================================================================>

// Start weekly game list url api ===============================================================================>
  Future<WeeklyGameListModel> weeklyGameList(String tournamentId) async {
    final prefs = await SharedPreferences.getInstance();
    final token = prefs.getString('token');

    final response = await http.post(
      Uri.parse('${ApiConstants.baseUrl}${ApiConstants.weeklyGameListUrl}'),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer $token'
      },
      body: jsonEncode({"weekly_tournament_id": tournamentId}),
    );

    if (response.statusCode == 200) {
      final responseJson = json.decode(response.body);
      print(responseJson);
      return WeeklyGameListModel.fromJson(responseJson);
    } else {
      final responseJson = json.decode(response.body);
      print(responseJson);
      throw Exception('Failed: ${responseJson['message']}');
    }
  }
// End weekly game list url api ===================================================================================>

// Start daily win api ===============================================================================>
  Future<DailyWinModel> dailyWin() async {
    final prefs = await SharedPreferences.getInstance();
    final token = prefs.getString('token');

    final response = await http.get(
      Uri.parse('${ApiConstants.baseUrl}${ApiConstants.dailyWinUrl}'),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer $token'
      },
    );

    if (response.statusCode == 200) {
      final responseJson = json.decode(response.body);
      print(responseJson);
      return DailyWinModel.fromJson(responseJson);
    } else {
      final responseJson = json.decode(response.body);
      print(responseJson);
      throw Exception('Failed: ${responseJson['message']}');
    }
  }
// End daily win api ===================================================================================>

// Start daily win api ===============================================================================>
  Future<WeeklyWinModel> weeklyWin() async {
    final prefs = await SharedPreferences.getInstance();
    final token = prefs.getString('token');

    final response = await http.get(
      Uri.parse('${ApiConstants.baseUrl}${ApiConstants.weeklyWinUrl}'),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer $token'
      },
    );

    if (response.statusCode == 200) {
      final responseJson = json.decode(response.body);
      print(responseJson);
      return WeeklyWinModel.fromJson(responseJson);
    } else {
      final responseJson = json.decode(response.body);
      print(responseJson);
      throw Exception('Failed: ${responseJson['message']}');
    }
  }
// End daily win api ===================================================================================>

// Start winner count api ===============================================================================>
  Future<WinnerCountModel> winnerCount() async {
    final prefs = await SharedPreferences.getInstance();
    final token = prefs.getString('token');

    final response = await http.get(
      Uri.parse('${ApiConstants.baseUrl}${ApiConstants.winnerCountUrl}'),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer $token'
      },
    );

    if (response.statusCode == 200) {
      final responseJson = json.decode(response.body);
      print(responseJson);
      return WinnerCountModel.fromJson(responseJson);
    } else {
      final responseJson = json.decode(response.body);
      print(responseJson);
      throw Exception('Failed: ${responseJson['message']}');
    }
  }
// End winner count api ===================================================================================>

// Start plateform fee api ===============================================================================>
  Future<PlateformFeeModel> plateFormFee() async {
    final prefs = await SharedPreferences.getInstance();
    final token = prefs.getString('token');

    final response = await http.post(
      Uri.parse('${ApiConstants.baseUrl}${ApiConstants.plateformFeeUrl}'),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer $token'
      },
    );

    if (response.statusCode == 200) {
      final responseJson = json.decode(response.body);
      print(responseJson);
      return PlateformFeeModel.fromJson(responseJson);
    } else {
      final responseJson = json.decode(response.body);
      print(responseJson);
      throw Exception('Failed: ${responseJson['message']}');
    }
  }
// End plateform fee api ===================================================================================>

// Start get Kyc api ===============================================================================>
  Future<GetKYCModel> getKYC() async {
    final prefs = await SharedPreferences.getInstance();
    final token = prefs.getString('token');

    final response = await http.get(
      Uri.parse('${ApiConstants.baseUrl}${ApiConstants.kycGetUrl}'),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer $token'
      },
    );

    if (response.statusCode == 200) {
      final responseJson = json.decode(response.body);
      print(responseJson);
      return GetKYCModel.fromJson(responseJson);
    } else {
      final responseJson = json.decode(response.body);
      print(responseJson);
      throw Exception('Failed: ${responseJson['message']}');
    }
  }
// End get Kyc api ===================================================================================>

// Start post Kyc api ===============================================================================>
  Future<KYCPostModel> postKYC(String bankName, String accountNO,
      String ifscCode, String branchName, String holderName) async {
    final prefs = await SharedPreferences.getInstance();
    final token = prefs.getString('token');

    final response = await http.post(
        Uri.parse('${ApiConstants.baseUrl}${ApiConstants.kycPostUrl}'),
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer $token'
        },
        body: jsonEncode({
          "bank_name": bankName,
          "bank_account_no": accountNO,
          "bank_ifc_code": ifscCode,
          "bank_branch": branchName,
          "bank_holder_name": holderName
        }));

    if (response.statusCode == 200) {
      final responseJson = json.decode(response.body);
      print(responseJson);
      return KYCPostModel.fromJson(responseJson);
    } else {
      final responseJson = json.decode(response.body);
      print(responseJson);
      throw Exception('Failed: ${responseJson['message']}');
    }
  }
// End post Kyc api ===================================================================================>

// Start withdraw Request api ===============================================================================>
  Future<WithdrawRequestModel> withdrawRequest(String amount) async {
    final prefs = await SharedPreferences.getInstance();
    final token = prefs.getString('token');

    final response = await http.post(
        Uri.parse('${ApiConstants.baseUrl}${ApiConstants.withdrawRequestUrl}'),
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer $token'
        },
        body: jsonEncode({"amount": amount}));

    if (response.statusCode == 200) {
      final responseJson = json.decode(response.body);
      print(responseJson);
      return WithdrawRequestModel.fromJson(responseJson);
    } else {
      final responseJson = json.decode(response.body);
      print(responseJson);
      throw Exception('Failed: ${responseJson['message']}');
    }
  }
// End withdraw Request api  ===================================================================================>

// Start withdraw history api ===============================================================================>
  Future<WithdrawHistoryModel> withdrawHistory() async {
    final prefs = await SharedPreferences.getInstance();
    final token = prefs.getString('token');

    final response = await http.get(
      Uri.parse('${ApiConstants.baseUrl}${ApiConstants.withdrawHistoryUrl}'),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer $token'
      },
    );

    if (response.statusCode == 200) {
      final responseJson = json.decode(response.body);
      print(responseJson);
      return WithdrawHistoryModel.fromJson(responseJson);
    } else {
      final responseJson = json.decode(response.body);
      print(responseJson);
      throw Exception('Failed: ${responseJson['message']}');
    }
  }
// End withdraw history api ===================================================================================>

// Start offline Start api ===============================================================================>
  Future<OfflineStartModel> offlineStart(
      String playerId, String playerCount, String tournamentId) async {
    final prefs = await SharedPreferences.getInstance();
    final token = prefs.getString('token');

    final response = await http.post(
        Uri.parse('${ApiConstants.baseUrl}${ApiConstants.offlineStartUrl}'),
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer $token'
        },
        body: jsonEncode({
          "player_id": playerId,
          "player_count": playerCount,
          "tournamentId": tournamentId,
          "color": "1"
        }));

    if (response.statusCode == 200) {
      final responseJson = json.decode(response.body);
      print(responseJson);
      return OfflineStartModel.fromJson(responseJson);
    } else {
      final responseJson = json.decode(response.body);
      print(responseJson);
      throw Exception('Failed: ${responseJson['message']}');
    }
  }
// End offline Start api  ===================================================================================>

// Start create game api ===============================================================================>
  Future<CreateGameModel> createGame(
      String dailyTournamentId,
      String weeklyTournamentId,
      String tournamentType,
      String tournamentRound) async {
    final prefs = await SharedPreferences.getInstance();
    final token = prefs.getString('token');

    final response = await http.post(
        Uri.parse('${ApiConstants.baseUrl}${ApiConstants.createGameUrl}'),
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer $token'
        },
        body: jsonEncode({
          "daily_tournament_id": dailyTournamentId,
          "weekly_tournament_id": weeklyTournamentId,
          "tournament_type": tournamentType,
          "tournament_round": tournamentRound
        }));

    if (response.statusCode == 200) {
      final responseJson = json.decode(response.body);
      print(responseJson);
      return CreateGameModel.fromJson(responseJson);
    } else {
      final responseJson = json.decode(response.body);
      print(responseJson);
      throw Exception('Failed: ${responseJson['message']}');
    }
  }
// End create game api  ===================================================================================>
}
