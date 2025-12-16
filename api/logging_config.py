import logging
import sys
from pythonjsonlogger import jsonlogger

def setup_logging():
    """Setup logging configuration for the API"""

    # Create a custom logger
    logger = logging.getLogger()
    logger.setLevel(logging.INFO)

    # Create handlers
    handler = logging.StreamHandler(sys.stdout)
    handler.setLevel(logging.INFO)

    # Create formatters and add it to handlers
    json_formatter = jsonlogger.JsonFormatter(
        '%(asctime)s %(name)s %(levelname)s %(message)s'
    )
    handler.setFormatter(json_formatter)

    # Add handlers to the logger
    logger.addHandler(handler)

    return logger

def get_logger(name):
    """Get a logger with the specified name"""
    return logging.getLogger(name)