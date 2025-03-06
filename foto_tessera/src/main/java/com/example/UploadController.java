package com.example.controller;

import com.example.model.User;
import com.example.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@Controller
public class UploadController {

    @Autowired
    private UserRepository userRepository;

    @GetMapping("/")
    public String showUploadForm(Model model) {
        return "upload";  // Nome del file HTML
    }

    @PostMapping("/upload")
    public String handleFileUpload(
            @RequestParam("nome") String nome,
            @RequestParam("cognome") String cognome,
            @RequestParam("email") String email,
            @RequestParam("telefono") String telefono,
            @RequestParam("foto") MultipartFile foto) throws IOException {

        // Crea l'oggetto User
        User user = new User();
        user.setNome(nome);
        user.setCognome(cognome);
        user.setEmail(email);
        user.setTelefono(telefono);
        user.setFoto(foto.getBytes());  // Memorizza l'immagine come array di byte

        // Salva l'utente nel database
        userRepository.save(user);

        return "success"; // Nome della vista di conferma
    }
}
