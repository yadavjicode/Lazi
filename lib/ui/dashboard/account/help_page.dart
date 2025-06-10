import 'package:flutter/material.dart';
import 'package:flutter_rating_bar/flutter_rating_bar.dart';

void main() {
  runApp(const MaterialApp(home: RatingDemo()));
}

class RatingDemo extends StatelessWidget {
  const RatingDemo({super.key});

  void showRatingDialog(BuildContext context) {
    showDialog(
      context: context,
      builder: (_) => const RatingDialog(),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Rate Experience')),
      body: Center(
        child: ElevatedButton(
          onPressed: () => showRatingDialog(context),
          child: const Text('Rate Now'),
        ),
      ),
    );
  }
}

class RatingDialog extends StatefulWidget {
  const RatingDialog({super.key});

  @override
  State<RatingDialog> createState() => _RatingDialogState();
}

class _RatingDialogState extends State<RatingDialog> {
  double _rating = 0;
  List<String> selectedIssues = [];
  bool showError = false;
  bool showCommentBox = false;
  final TextEditingController _commentController = TextEditingController();
  final List<String> positiveFeedback = [
    'GOOD CUSTOMER & BEHAVIOR',
    'FULL PAYMENT RECEIVED',
    'PROFESSIONAL CUSTOMER',
    'ON TIME & POLITE',
    'KEPT CAB CLEAN',
    'NO EXTRA DEMANDS',
  ];

  final List<String> negativeFeedback = [
    'NOT PAY MY FULL PAYMENT',
    'CUSTOMER NOT GOOD & DIRTY MY CAB',
    'CUSTOMER HAS EXTRA PASSENGERS AND BAD BEHAVIOR',
    'CUSTOMER WAS RUDE',
    'DAMAGED CAB INTERIOR',
    'TOOK LONGER THAN EXPECTED',
    'Other',
  ];

  void handleSubmit() {
    if (_rating < 3 && selectedIssues.isEmpty) {
      setState(() {
        showError = true;
      });
      return;
    }

    Navigator.pop(context);
    ScaffoldMessenger.of(context).showSnackBar(
      const SnackBar(content: Text('Feedback Submitted')),
    );
  }

  @override
  Widget build(BuildContext context) {
    final isPositive = _rating >= 3;

    return AlertDialog(
      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(20)),
      contentPadding:
          const EdgeInsets.only(top: 20, right: 15, bottom: 20, left: 15),
      content: SingleChildScrollView(
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            const Text(
              'How would you rate your experience?',
              textAlign: TextAlign.center,
              style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
            ),
            const SizedBox(height: 15),
            RatingBar.builder(
              initialRating: _rating,
              minRating: 1,
              allowHalfRating: false,
              itemCount: 5,
              itemSize: 36,
              glow: false,
              unratedColor: Colors.grey[400],
              itemBuilder: (context, _) => const Icon(
                Icons.star,
                color: Colors.amber,
              ),
              onRatingUpdate: (rating) {
                setState(() {
                  _rating = rating;
                  selectedIssues.clear();
                  showCommentBox = false;
                  _commentController.clear();
                  showError = false;
                });
              },
            ),
            const SizedBox(height: 15),
            if (_rating > 0) ...[
              const SizedBox(height: 10),
              Wrap(
                spacing: 2,
                runSpacing: 2,
                children: (isPositive ? positiveFeedback : negativeFeedback)
                    .map((issue) {
                  final isSelected = selectedIssues.contains(issue);
                  return ChoiceChip(
                    label: Text(
                      issue,
                      style: const TextStyle(fontSize: 12),
                      overflow: TextOverflow.ellipsis,
                      maxLines: 1,
                    ),
                    labelPadding:
                        const EdgeInsets.symmetric(horizontal: 0, vertical: 0),
                    selected: isSelected,
                    selectedColor: Colors.blue.shade100,
                    onSelected: (_) {
                      setState(() {
                        if (isSelected) {
                          selectedIssues.remove(issue);
                          if (issue == 'Other') showCommentBox = false;
                        } else {
                          selectedIssues.add(issue);
                          if (issue == 'Other') showCommentBox = true;
                        }
                      });
                    },
                  );
                }).toList(),
              ),
              if (showError)
                const Padding(
                  padding: EdgeInsets.only(top: 10),
                  child: Text(
                    'Please select at least one issue',
                    style: TextStyle(color: Colors.red),
                  ),
                ),
            ],
            if (showCommentBox)
              Padding(
                padding: const EdgeInsets.only(top: 10),
                child: TextField(
                  controller: _commentController,
                  maxLines: 3,
                  decoration: InputDecoration(
                    hintText: 'Please describe the issue...',
                    border: OutlineInputBorder(
                      borderRadius: BorderRadius.circular(10),
                    ),
                  ),
                ),
              ),
            const SizedBox(height: 20),
            SizedBox(
              width: double.infinity,
              child: ElevatedButton(
                onPressed: handleSubmit,
                style: ElevatedButton.styleFrom(
                  backgroundColor: Colors.orangeAccent,
                  foregroundColor: Colors.white,
                  shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(10)),
                ),
                child: const Text('Submit'),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
