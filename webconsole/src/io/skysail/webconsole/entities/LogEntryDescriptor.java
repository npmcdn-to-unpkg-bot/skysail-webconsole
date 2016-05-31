package io.skysail.webconsole.entities;

import org.osgi.service.log.LogEntry;
import org.osgi.service.log.LogService;

import lombok.Getter;

@Getter
public class LogEntryDescriptor {

	private long time;
	private String level;
	private String message;
	private ServiceDescriptor service;
	private BundleDescriptor bundleDescriptor;
	private String exception;

	public LogEntryDescriptor(LogEntry entry) {
		time = entry.getTime();
		level = mapLevel(entry.getLevel());
		message = entry.getMessage();
		service = entry.getServiceReference() != null ? new ServiceDescriptor(entry.getServiceReference()) : null;
		bundleDescriptor = entry.getBundle() != null ? new BundleDescriptor(entry.getBundle()) : null;
		exception = entry.getException() != null ? entry.getException().toString() : "";
	}

	private String mapLevel(int level) {
		switch (level) {
		case LogService.LOG_DEBUG:
			return "DEBUG";
		case LogService.LOG_ERROR:
			return "ERROR";
		case LogService.LOG_INFO:
			return "INFO";
		case LogService.LOG_WARNING:
			return "WARNING";
		default:
			return "UNKNOWN";
		}
	}

}