import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:ludonew/controller/edit_profile_controller.dart';
import 'package:ludonew/controller/profile_controller.dart';
import 'package:ludonew/util/constant/contant_color.dart';
import 'package:ludonew/widgets/font.dart';
import 'package:image_picker/image_picker.dart';
import 'package:intl/intl.dart';
import 'dart:io';

class EditProfile extends StatefulWidget {
  const EditProfile({super.key});

  @override
  State<EditProfile> createState() => _EditProfile();
}

class _EditProfile extends State<EditProfile> {
  final _formKey = GlobalKey<FormState>();
  final ProfileController profileController = Get.put(ProfileController());
  final EditProfileController editProfileController =
      Get.put(EditProfileController());

  final TextEditingController nameController = TextEditingController();
  final TextEditingController dobController = TextEditingController();

  String selectedGender = "Male";
  File? _imageFile;

  @override
  void initState() {
    super.initState();
    WidgetsBinding.instance.addPostFrameCallback((_) {
      profileController.profile(context).then((_) {
        setState(() {
          nameController.text = profileController.member?.name ?? "";
          if (profileController.member?.dateOfBirth != null) {
            dobController.text = profileController.member?.dateOfBirth ?? "";
          }

          if (profileController.member?.gender != null) {
            selectedGender = profileController.member?.gender ?? "";
          }
        });
      });
    });
  }

  Future<void> _pickImage(ImageSource source) async {
    final pickedFile =
        await ImagePicker().pickImage(source: source, imageQuality: 85);
    if (pickedFile != null) {
      setState(() {
        _imageFile = File(pickedFile.path);
      });
    }
  }

  void _showImageSourceDialog() {
    showModalBottomSheet(
      context: context,
      builder: (_) => SafeArea(
        child: Wrap(
          children: [
            ListTile(
              leading: const Icon(Icons.photo),
              title: const Text('Pick from Gallery'),
              onTap: () {
                Navigator.pop(context);
                _pickImage(ImageSource.gallery);
              },
            ),
            ListTile(
              leading: const Icon(Icons.camera_alt),
              title: const Text('Take a Photo'),
              onTap: () {
                Navigator.pop(context);
                _pickImage(ImageSource.camera);
              },
            ),
          ],
        ),
      ),
    );
  }

  Future<void> _selectDate() async {
    DateTime? picked = await showDatePicker(
      context: context,
      initialDate: DateTime(1995, 1),
      firstDate: DateTime(1900),
      lastDate: DateTime.now(),
    );
    if (picked != null) {
      dobController.text = DateFormat('yyyy-MM-dd').format(picked);
    }
  }

  void _submitForm() {
    if (_imageFile == null && profileController.member?.profileImage == null) {
      Get.snackbar("Error", "Please select a profile image",
          backgroundColor: Colors.red.shade100, colorText: Colors.black);
      return;
    }

    if (_formKey.currentState!.validate()) {
      editProfileController.editProfile(context, nameController.text.toString(),
          dobController.text.toString(), selectedGender, _imageFile);
      // 🔁 Submit to API or perform save
      print("All validations passed ✅");
      print("image  ${_imageFile}");
      print("Name: ${nameController.text}");
      print("Gender: $selectedGender");
      print("DOB: ${dobController.text}");
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        backgroundColor: AppColors.white,
        appBar: AppBar(
          backgroundColor: AppColors.white,
          iconTheme: IconThemeData(color: AppColors.primaryColor),
          title: Text(
            "Update Profile",
            style: FontConstant.styleSemiBold(
                fontSize: 23, color: AppColors.primaryColor),
          ),
        ),
        body: Obx(() {
          return Stack(children: [
            Padding(
              padding: const EdgeInsets.all(16.0),
              child: Form(
                key: _formKey,
                child: Column(
                  children: [
                    Expanded(
                      child: SingleChildScrollView(
                        child: Column(
                          children: [
                            // Profile Image

                            GestureDetector(
                              onTap: _showImageSourceDialog,
                              child: Stack(children: [
                                CircleAvatar(
                                  radius: 55,
                                  backgroundColor: Colors.grey[300],
                                  backgroundImage: _imageFile != null
                                      ? FileImage(_imageFile!)
                                          as ImageProvider<Object>
                                      : (profileController
                                                      .member?.profileImage !=
                                                  null &&
                                              profileController.member!
                                                  .profileImage!.isNotEmpty)
                                          ? NetworkImage(
                                                  "https://lazioludo.com/${profileController.member?.profileImage ?? ""}")
                                              as ImageProvider<Object>
                                          : null,
                                  child: (_imageFile == null &&
                                          (profileController
                                                      .member?.profileImage ==
                                                  null ||
                                              profileController.member!
                                                  .profileImage!.isEmpty))
                                      ? const Icon(Icons.person,
                                          size: 50, color: Colors.grey)
                                      : null,
                                ),
                                Positioned(
                                    right: 0,
                                    top: 0,
                                    child: GestureDetector(
                                      onTap: _showImageSourceDialog,
                                      child: Container(
                                          padding: EdgeInsets.all(3),
                                          decoration: BoxDecoration(
                                              shape: BoxShape.circle,
                                              color: AppColors.secondaryColor),
                                          child: Icon(
                                            Icons.edit,
                                            color: AppColors.white,
                                            size: 20,
                                          )),
                                    )),
                              ]),
                            ),

                            const SizedBox(height: 20),

                            // Name Field
                            TextFormField(
                              controller: nameController,
                              validator: (value) {
                                if (value == null || value.trim().isEmpty) {
                                  return 'Name is required';
                                }
                                return null;
                              },
                              decoration: const InputDecoration(
                                labelText: "Name",
                                border: OutlineInputBorder(),
                                labelStyle:
                                    TextStyle(color: AppColors.primaryColor),
                                focusedBorder: OutlineInputBorder(
                                  borderSide: BorderSide(
                                      color: AppColors.primaryColor,
                                      width: 2.0),
                                ),
                              ),
                            ),
                            const SizedBox(height: 15),

                            // Gender Dropdown
                            DropdownButtonFormField<String>(
                              value: selectedGender,
                              items: ["Male", "Female", "Other"]
                                  .map((e) => DropdownMenuItem(
                                      value: e, child: Text(e)))
                                  .toList(),
                              onChanged: (val) {
                                setState(() {
                                  selectedGender = val!;
                                });
                              },
                              decoration: const InputDecoration(
                                labelText: "Gender",
                                border: OutlineInputBorder(),
                                labelStyle:
                                    TextStyle(color: AppColors.primaryColor),
                                focusedBorder: OutlineInputBorder(
                                  borderSide: BorderSide(
                                      color: AppColors.primaryColor,
                                      width: 2.0),
                                ),
                              ),
                            ),
                            const SizedBox(height: 16),

                            // Date of Birth
                            TextFormField(
                              controller: dobController,
                              readOnly: true,
                              onTap: _selectDate,
                              validator: (value) {
                                if (value == null || value.trim().isEmpty) {
                                  return 'Please select your date of birth';
                                }
                                return null;
                              },
                              decoration: const InputDecoration(
                                labelText: "Date of Birth",
                                border: OutlineInputBorder(),
                                labelStyle:
                                    TextStyle(color: AppColors.primaryColor),
                                focusedBorder: OutlineInputBorder(
                                  borderSide: BorderSide(
                                      color: AppColors.primaryColor,
                                      width: 2.0),
                                ),
                                suffixIcon: Icon(Icons.calendar_today),
                              ),
                            ),
                          ],
                        ),
                      ),
                    ),

                    // Submit Button
                    SizedBox(
                      width: double.infinity,
                      child: ElevatedButton(
                          onPressed: _submitForm,
                          style: ElevatedButton.styleFrom(
                            backgroundColor: AppColors.primaryColor,
                            foregroundColor: Colors.white,
                            elevation: 4,
                            padding: const EdgeInsets.all(13),
                            shape: RoundedRectangleBorder(
                              borderRadius: BorderRadius.circular(23),
                            ),
                          ),
                          child: Text(
                            "Update Profile",
                            style: FontConstant.styleMedium(
                                fontSize: 17, color: AppColors.white),
                          )),
                    ),
                    SizedBox(
                      height: 20,
                    )
                  ],
                ),
              ),
            ),
            if (editProfileController.isLoading.value ||
                profileController.isLoading.value)
              Center(
                child: CircularProgressIndicator(
                  color: AppColors.primaryColor,
                ),
              )
          ]);
        }));
  }
}
