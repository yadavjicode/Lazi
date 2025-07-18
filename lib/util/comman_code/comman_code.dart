class CommanCode {
static   String formatDateTime(String input) {
    try {
      DateTime dateTime = DateTime.parse(input)
          .toLocal(); // Converts from UTC to local time if needed
      String formatted =
          "${_twoDigits(dateTime.hour)}:${_twoDigits(dateTime.minute)}:${_twoDigits(dateTime.second)} "
          "${_twoDigits(dateTime.day)}-${_twoDigits(dateTime.month)}-${dateTime.year}";
      return formatted;
    } catch (e) {
      return "Invalid date";
    }
  }
 static   String _twoDigits(int n) => n.toString().padLeft(2, '0');
}