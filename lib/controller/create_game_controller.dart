import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:ludonew/api_service/api_service.dart';
import 'package:ludonew/model/create_game_model.dart';
import 'package:ludonew/widgets/CustomSnackbar.dart';

class CreateGameController extends GetxController {
  final ApiService apiService = ApiService();
  var isLoading = false.obs;
  CreateGameModel? _member;
  String? _error;
  CreateGameModel? get member => _member;
  String? get error => _error;

  Future<void> createGame(
      BuildContext context,
      String dailyTournamentId,
      String weeklyTournamentId,
      String tournamentType,
      String tournamentRound) async {
    isLoading.value = true;
    _error = null;

    try {
      _member = await apiService.createGame(dailyTournamentId,
          weeklyTournamentId, tournamentType, tournamentRound);
    } catch (e) {
      _error = e.toString();
      print(_error);
      CustomSanckbar.showSnackbar(
          context,
          "Something went wrong while fetching data. Please try again later!",
          false);
    } finally {
      isLoading.value = false;
    }
  }
}
