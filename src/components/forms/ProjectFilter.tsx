/**
 * LAB-6 | Uygulama-5 — ProjectFilter (forms) — Profesyonel Versiyon
 * Gelişmiş Glassmorphism + Filtre Sıfırlama + Mikro-Animasyonlar.
 */
import { motion, AnimatePresence } from 'framer-motion';
import Input from '../Input';
import Button from '../Button';
import type { Category, SortField, SortOrder } from '../../types/project';

interface ProjectFilterProps {
  search: string;
  onSearchChange: (value: string) => void;
  category: Category | 'all';
  onCategoryChange: (value: Category | 'all') => void;
  sortField: SortField;
  onSortFieldChange: (value: SortField) => void;
  sortOrder: SortOrder;
  onSortOrderChange: (value: SortOrder) => void;
  resultCount: number;
  totalCount: number;
}

const CATEGORIES: { value: Category | 'all'; label: string; emoji: string }[] = [
  { value: 'all',       label: 'Tümü',      emoji: '🌐' },
  { value: 'frontend',  label: 'Frontend',  emoji: '🎨' },
  { value: 'fullstack', label: 'Full Stack', emoji: '⚡' },
  { value: 'backend',   label: 'Backend',   emoji: '⚙️' },
];

export default function ProjectFilter({
  search,
  onSearchChange,
  category,
  onCategoryChange,
  sortField,
  onSortFieldChange,
  sortOrder,
  onSortOrderChange,
  resultCount,
  totalCount,
}: ProjectFilterProps) {
  
  const isAnyFilterActive = search.length > 0 || category !== 'all';

  const clearFilters = () => {
    onSearchChange('');
    onCategoryChange('all');
  };

  return (
    <motion.div
      className="space-y-6 mb-12 bg-white/60 dark:bg-slate-900/60 backdrop-blur-2xl
                 border border-white/40 dark:border-slate-800/50 rounded-3xl p-6 md:p-8
                 shadow-2xl shadow-blue-500/5"
      role="search"
      aria-label="Proje filtrele"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex flex-col lg:flex-row gap-6 items-end">
        {/* Arama Kutusu */}
        <div className="flex-1 w-full relative">
          <Input
            id="project-search"
            label="Proje Ara"
            placeholder="Başlık, açıklama veya teknoloji..."
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
            className="!bg-white/40 dark:!bg-slate-800/40"
          />
          
          <AnimatePresence>
            {isAnyFilterActive && (
              <motion.button
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                onClick={clearFilters}
                className="absolute right-4 bottom-3.5 text-[10px] font-black uppercase tracking-widest
                           bg-slate-200 dark:bg-slate-700 px-3 py-1 rounded-lg
                           hover:bg-red-500 hover:text-white transition-colors"
              >
                Sıfırla ✕
              </motion.button>
            )}
          </AnimatePresence>
        </div>

        {/* Kategori Filtresi */}
        <div className="w-full lg:w-auto">
          <p className="text-xs font-bold mb-2 text-slate-500 dark:text-slate-400 uppercase tracking-widest px-1">
            Kategori
          </p>
          <div
            className="flex gap-2 flex-wrap"
            role="group"
            aria-label="Kategori filtresi"
          >
            {CATEGORIES.map((cat) => (
              <motion.button
                key={cat.value}
                onClick={() => onCategoryChange(cat.value)}
                aria-pressed={category === cat.value}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2.5 rounded-xl text-xs font-black uppercase tracking-tighter
                            transition-all duration-300 flex items-center gap-2
                            ${
                              category === cat.value
                                ? 'bg-blue-600 text-white shadow-xl shadow-blue-500/40 scale-105'
                                : 'bg-white/50 dark:bg-slate-800/50 text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700'
                            }`}
              >
                <span className="text-sm">{cat.emoji}</span>
                <span>{cat.label}</span>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Sıralama */}
        <div className="w-full lg:w-auto flex items-end gap-2">
          <div className="flex-1 lg:w-40">
            <p className="text-xs font-bold mb-2 text-slate-500 dark:text-slate-400 uppercase tracking-widest px-1">
              Sırala
            </p>
            <select
              value={sortField}
              onChange={(e) => onSortFieldChange(e.target.value as SortField)}
              className="w-full border border-slate-200 dark:border-slate-700/50 rounded-xl
                         px-4 py-2.5 text-sm font-bold bg-white/40 dark:bg-slate-800/40
                         text-slate-700 dark:text-slate-300 focus:ring-2 focus:ring-blue-500 outline-none
                         appearance-none cursor-pointer"
            >
              <option value="year">📅 Yıla Göre</option>
              <option value="title">🔤 Başlığa Göre</option>
            </select>
          </div>

          <Button
            variant="ghost"
            size="sm"
            onClick={() =>
              onSortOrderChange(sortOrder === 'asc' ? 'desc' : 'asc')
            }
            className="h-[46px] bg-slate-100 dark:bg-slate-800 text-slate-700
                       dark:text-slate-200 rounded-xl border border-slate-200 dark:border-slate-700
                       hover:border-blue-500 transition-all font-black text-[10px] min-w-[80px]"
          >
            {sortOrder === 'asc' ? '↑ Artan' : '↓ Azalan'}
          </Button>
        </div>
      </div>

      {/* Sonuç Sayacı */}
      <div className="flex items-center justify-between border-t border-slate-200/40 dark:border-slate-700/40 pt-5">
        <motion.p 
          className="text-xs font-bold text-slate-500 dark:text-slate-400"
          key={resultCount}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <span className="text-blue-600 dark:text-blue-400 text-sm font-black">{resultCount}</span>
          {' '}adet proje gösteriliyor
        </motion.p>
        
        <span className="text-[10px] font-black uppercase text-slate-300 dark:text-slate-700 tracking-[0.2em]">
          Lab 6 - Uygulama 5
        </span>
      </div>
    </motion.div>
  );
}
