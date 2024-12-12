package com.bytedesk.service.quality.exception;

public class QualityException extends RuntimeException {
    
    public QualityException(String message) {
        super(message);
    }
    
    public QualityException(String message, Throwable cause) {
        super(message, cause);
    }
} 