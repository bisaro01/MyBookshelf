package com.mybookshelf.mybookshelf;

import javafx.application.Application;
import javafx.fxml.FXMLLoader;
import javafx.scene.Scene;
import javafx.scene.text.Font;
import javafx.scene.text.FontPosture;
import javafx.scene.text.Text;
import javafx.scene.text.TextFlow;
import javafx.stage.Stage;

import java.io.IOException;

public class HelloApplication extends Application {

    @Override
    public void start(Stage stage) throws IOException {
        FXMLLoader fxmlLoader = new FXMLLoader(HelloApplication.class.getResource("hello-view.fxml"));

        // Create a scene
        Scene scene = new Scene(fxmlLoader.load(), 960, 540);
        stage.setTitle("MyBookshelf");

        // Set scene
        stage.setScene(scene);
        stage.show();
    }
}
