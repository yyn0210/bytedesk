package com.bytedesk.ticket.attachment.exception;

public class AttachmentException extends RuntimeException {
    public AttachmentException(String message) {
        super(message);
    }
    
    public AttachmentException(String message, Throwable cause) {
        super(message, cause);
    }
} 