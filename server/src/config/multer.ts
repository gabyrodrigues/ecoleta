import multer, { StorageEngine } from 'multer';
import path from 'path';
import crypto from 'crypto';

const uploadsFolder = path.resolve(__dirname, '..', '..', 'uploads');

interface UploadConfig {
    photosFolder: string;
    uploadsFolder: string;
  
    storage: StorageEngine;
  
    limits: {
      fileSize: number;
    };
  
    fileFilter(): any;
}

export default {
    uploadsFolder,
    photosFolder: path.resolve(uploadsFolder, 'photos'),

    storage: multer.diskStorage({
        destination: uploadsFolder,
        filename(request, file, callback) {
            //criando nome aleatorio para o arquivo de imagem para evitar conflitos
            const hash = crypto.randomBytes(6).toString('hex');

            const filename = `${hash}-${file.originalname}`;

            callback(null, filename);
        }
    }),
    limits: {
        fileSize: 8 * 2048 * 2048
    },
    fileFilter: (request, file, callback) => {
        const allowedMimes = [
            'image/jpeg',
            'image/jpg',
            'image/png'
        ];

        if (allowedMimes.includes(file.mimetype)) {
            callback(null, true);
        } else {
            callback(new Error("Invalid file type. Only images are allowed."));
        }
    }
} as UploadConfig;