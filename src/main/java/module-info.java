module com.mybookshelf.mybookshelf {
    requires javafx.controls;
    requires javafx.fxml;
    requires javafx.web;

    requires org.controlsfx.controls;
    requires com.dlsc.formsfx;
    requires org.kordamp.ikonli.javafx;
    requires eu.hansolo.tilesfx;

    opens com.mybookshelf.mybookshelf to javafx.fxml;
    exports com.mybookshelf.mybookshelf;
}